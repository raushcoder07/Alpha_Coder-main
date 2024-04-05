import { db } from "./firebaseInit";
import { ref, get, child, set, onValue } from "firebase/database";
import { async } from "@firebase/util";

export const getAllData = async () => {
    const dbRef = ref(db);
    const data = await (await get(child(dbRef, "/"))).val();
    // console.log({ data });
    return data;
};

export const isUserAlreadyInDb = async (uid) => {
    const dbRef = ref(db);
    const data = await (await get(child(dbRef, `registrants/${uid}`))).val();
    // console.log({ dataFromHere: data });
    return data;
};

export const createNewUser = async (data) => {
    const dbRef = ref(db);
    const res = await set(child(dbRef, `registrants/${data.uid}`), data);
    // console.log("inside createNewUser", res);
    return res;
};

export const CoreTeamDetails = async () => {
    const dbRef = ref(db);
    const res = await (await get(child(dbRef, `core-teams-details/`))).val();
    // console.log(">> Firebase | Fetched Core Team Details \n", res);
    return res;
};

export const GetDetailsOfEndPoint = async (endpoint) => {
    const dbRef = ref(db);
    const res = await (await get(child(dbRef, endpoint))).val();
    // console.log(">> Firebase | Fetched data with endpoint: " + endpoint + "\n", res);
    return res;
};

export const GetDetailsOfEndPointSnapshot = async (endpoint, callback) => {
    const dbRef = ref(db, endpoint);
    onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        // console.log(">> Snapshot", data);
        callback(data);
    });
};

export const getAllEvents = async () => {
    const dbRef = ref(db);
    const data = await (await get(child(dbRef, "/events"))).val();
    return data;
};

// create a team
export const createTeam = async (teamName, teamMembers, uuid, teamId) => {
    const dbRef = ref(db);
    // const teamId = slugify(teamName) + "-" + uuid.slice(0, 5);
    const resTeam = await set(child(dbRef, `teams/${teamId}`), {
        teamName,
        teamMembers,
        teamLeaderUUID: uuid,
        createdAt: new Date().toISOString(),
        hasPaid: false,
    });
    return resTeam;
};

export const createParticipants = async (uuid, eventId, category) => {
    const dbRef = ref(db);

    const uuids = (await get(child(dbRef, `participants/${eventId}/${category}`))).val();
    let resParticipation;

    if (uuids && uuids.length > 0) {
        resParticipation = await set(child(dbRef, `participants/${eventId}/${category}`), [
            ...uuids,
            uuid,
        ]);
    } else {
        resParticipation = await set(child(dbRef, `participants/${eventId}/${category}`), [uuid]);
    }

    return resParticipation;
};

/**
 *
 * @param {teamName, teamMembers, uuid, category, eventId}
 * @returns
 */
export const handleRegistration = async (data) => {
    const { teamName, teamMembers, uuid, category, eventId } = data;
    const teamId = slugify(teamName) + "-" + uuid.slice(0, 5);

    // promise all
    return Promise.all([
        createTeam(teamName, teamMembers, uuid, teamId),
        createParticipants(uuid, eventId, category),
    ]);
};

export const slugify = (string) => {
    return string
        .toString()
        .toLowerCase()
        .trim()
        .replace(/&/g, "-and-") // Replace & with 'and'
        .replace(/[\s\W-]+/g, "-"); // Replace spaces, non-word characters and dashes with a single dash (-)
};