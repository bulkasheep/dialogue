//const baseURL = "https://api.dev.selfschool.spiks.dev";
const baseURL = "https://api.selfschool.ru";

const methods = {
    auth: {
        login: "/auth/login",
        usechallenge: "/auth/use-challenge",
        refresh: "/auth/refresh"
    },
    users: {
        me: "/users/me"
    },
    themes: {
        popular: "/dialog/themes/popular"
    },
    videoquotes: {
        list: "/dialog/video-quotes"
    },
    dialogues: {
        popular: "/dialog/dialogues/popular",
        byslug: (slug = "") => "/dialog/dialogues/by-discussion-slug/" + slug,
        byparticipant: (id = "") => "/dialog/dialogues/by-participant/" + id
    },
    participants: {
        list: "/dialog/participants/list",
        byid: (id = "") => "/dialog/participants/" + id
    },
    review: {
        byparticipant: (id = "") => "/dialog/review/participant/" + id
    },
    podcasts: {
        list: "/dialog/podcasts",
        byslug: (slug = "") => "/dialog/podcasts/by-discussion-slug/" + slug
    },
    monologues: {
        byslug: (slug = "") => "/dialog/monologues/by-discussion-slug/" + slug
    },
    opinions: {
        popular: "/dialog/opinions/popular",
        byslug: (slug = "") => "/dialog/opinions/by-discussion-slug/" + slug
    },
    celebrityopinion: {
        list: "/dialog/celebrity-opinion"
    }
}

const DialogueAPI = {
    url: (method, searchParams) => {
        const url = new URL(method, baseURL);
        if (searchParams) url.search = new URLSearchParams(searchParams);

        return url;
    },
    send: (method, URLmethod, options = {}) => {
        let isFirstUnauthError = true;
        const url = DialogueAPI.url(URLmethod, options.searchParams).toString();

        const setting = {};
        if (options.body) setting.body = options.body;

        return fetch(url, {
            method: method,
            mode: "cors",
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Access-Control-Allow-Credentials': 'TRUE'
            },
            credentials: "include",
            ...setting
        }).then(response => {
            if ((response.status === 401) && (isFirstUnauthError)) {
                isFirstUnauthError = false;

                return DialogueAPI.send("POST", methods.auth.refresh)
                    .then(() =>
                        DialogueAPI.send(method, URLmethod, options));
            }

            if (!response.ok) {
                throw new Error(response.status);
            }

            return response.json();
        });
    },
    login: (body) =>
        DialogueAPI.send("POST", methods.auth.login, {
            body: JSON.stringify(body)
        }).then(test => { console.log(test); DialogueAPI.useChallenge(test) }),
    useChallenge: (json) =>
        DialogueAPI.send("POST", methods.auth.usechallenge, {
            body: JSON.stringify({ challenge: json.challenge })
        }
        ),
    getMe: () =>
        DialogueAPI.send("GET", methods.users.me, {}
        ),
    getPopularThemes: ({ page = 1 }) =>
        DialogueAPI.send("GET", methods.themes.popular, {
            searchParams: { page: page }
        }
        ),
    getVideoQuotes: ({ page = 1 }) =>
        DialogueAPI.send("GET", methods.videoquotes.list, {
            searchParams: { page: page }
        }
        ),
    getPopularDialogues: ({ page = 1, ...params }) =>
        DialogueAPI.send("GET", methods.dialogues.popular, {
            searchParams: { page: page, ...params }
        }
        ),
    getDialogueBySlug: ({ slug = "" }) =>
        DialogueAPI.send("GET", methods.dialogues.byslug(slug)
        ),
    getParticipantDialogues: ({ id = "", page = 1, ...params }) =>
        DialogueAPI.send("GET", methods.dialogues.byparticipant(id), {
            searchParams: { page: page, ...params }
        }
        ),
    getParticipants: ({ page = 1, role = "null" }) =>
        DialogueAPI.send("GET", methods.participants.list, {
            searchParams: { page: page, ...(role !== "null" ? { role: role } : {}) }
        }
        ),
    getParticipant: ({ id = "" }) =>
        DialogueAPI.send("GET", methods.participants.byid(id)
        ),
    getParticipantReview: ({ id = "", page = 1 }) =>
        DialogueAPI.send("GET", methods.review.byparticipant(id), {
            searchParams: { page: page }
        }
        ),
    getPodcasts: ({ page = 1 }) =>
        DialogueAPI.send("GET", methods.podcasts.list, {
            searchParams: { page: page }
        }
        ),
    getPodcastsBySlug: ({ slug = "" }) =>
        DialogueAPI.send("GET", methods.podcasts.byslug(slug)
        ),
    getMonologuesBySlug: ({ slug, page = 1 }) =>
        DialogueAPI.send("GET", methods.monologues.byslug(slug), {
            searchParams: { page: page }
        }
        ),
    getOpinionsBySlug: ({ slug = "", page = 1 }) =>
        DialogueAPI.send("GET", methods.opinions.byslug(slug), {
            searchParams: { page: page, amountOfItems: 50 }
        }
        ),
    getPopularOpinions: ({ page = 1 }) =>
        DialogueAPI.send("GET", methods.opinions.popular, {
            searchParams: { page: page }
        }
        ),
    getCelebrityOpinions: ({ page = 1 }) =>
        DialogueAPI.send("GET", methods.celebrityopinion.list, {
            searchParams: { page: page }
        }
        )
}

export default DialogueAPI;