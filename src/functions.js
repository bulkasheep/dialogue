const Path = {
    login: "/login",
    discussion: (slug) => "/discussion/" + slug,
    participant: (id) => "/participant/" + id
};

function declination(number, titles = ["год", "года", "лет"]) {
    const cases = [2, 0, 1, 1, 1, 2];

    const digit = (number % 10);
    const tendigit = (number % 100);

    const title = titles[
        (tendigit > 4 && tendigit < 20) ? 2 :
            cases[(digit < 5) ? digit : 5]
    ];

    return `${number} ${title}`;
}

function maskNumber(value) {
    let str = "" + value;
    let differences = 2 - str.length;
    if (differences >= 1) str = (new Array(differences)).fill(0).join("") + str;
    return str;
}

function secondsToString(number) {
    let str = "";
    let hours = Math.floor(number / 3600);
    let values = [
        ...(hours !== 0 ? [hours] : []),
        Math.floor((number % 3600) / 60),
        number % 60
    ]
    str = values.map(value => maskNumber(value)).join(":");
    return str;
}

const clamp = (value) => Math.min(Math.max(value, 0), 0.999999);

export { Path, declination, secondsToString, clamp };