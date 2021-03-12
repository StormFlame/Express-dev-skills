const skills = [
    {id: 0, skill: 'skill_0', learned: true},
    {id: 1, skill: 'skill_1', learned: false},
    {id: 2, skill: 'skill_2', learned: true},
    {id: 3, skill: 'skill_3', learned: true},
    {id: 4, skill: 'skill_4', learned: false}
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
}

function create(skill){
    skill.id = Date.now() % 1000000;

    skill.learned = false;
    skills.push(skill);
}

function deleteOne(id){
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}

function getAll(){
    return skills;
}

function getOne(id){
    return skills.find(skill => skill.id === parseInt(id));
}