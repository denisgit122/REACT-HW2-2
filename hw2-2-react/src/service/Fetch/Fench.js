const Fetch = fetch('https://api.spacexdata.com/v3/launches/').then(value => value.json())

export {Fetch};