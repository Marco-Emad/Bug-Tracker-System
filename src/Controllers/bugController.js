import bugModel from '../Models/bugModel'

export function retrieveBugs() {
    let data = [];

    data.push(new bugModel({
        _id: 123456,
        name: "Won't Load",
        details: "Crashes after 3 seconds",
        steps: "Open application and it will crash",
        version: "V2.0",
        assigned: "Marco Emad",
        creator: "Joe Bloggs",
        priority: 3,
        time: "23:38"
    }))

    data.push(new bugModel({
        _id: 1213456,
        name: "Crash on Load",
        details: "Crashes after 3 seconds",
        steps: "Open application and it will crash",
        version: "V2.0",
        assigned: "Marco Emad",
        creator: "Joe Bloggs",
        priority: 1,
        time: "23:32"
    }))

    let sorted = data.sort((a, b) => { return a.priority - b.priority })
    return sorted;

}