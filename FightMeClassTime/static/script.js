const getPoke = async(nameOrID) => {
    let result = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrID}`);
    result = await result.json();
    let {name, weight, sprites} = result;
    display.innerHTML = ``
}

getPoke();