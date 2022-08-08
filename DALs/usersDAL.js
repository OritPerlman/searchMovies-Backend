const jFile = require('jsonfile');

const getUsers = () =>
{
    return new Promise ((resolve, reject)=>
    {
        jFile.readFile(__dirname + "../dataBase/users.json", function (err,data)
        {
            if (err)
            {
                reject(err)
            }
            else
            {
                resolve(data);
            }
        })
    })
}

const saveUser = (obj) =>
{
    return new Promise ((resolve, reject)=>
    {
        jFile.writeFile(__dirname + "../dataBase/users.json",obj, function (err)
        {
            if (err)
            {
                reject(err)
            }
            else
            {
                resolve('created!');
            }
        })
    })
}

const deleteUser = (obj) =>
{
    return new Promise ((resolve, reject)=>
    {
        jFile.readFile(__dirname + "../dataBase/users.json", function (err,data)
        {
            if (err)
            {
                reject(err)
            }
            else
            {
                let users= data.users;
                if(users.filter(x=> x.userName==obj.userName))
                {
                    users.splice(x.userId, 1)
                }

                resolve('deleted!');
            }
        })
    })
}

const updateUser = (obj) =>
{
    return new Promise ((resolve, reject)=>
    {
        jFile.readFile(__dirname + "../dataBase/users.json", function (err,data)
        {
            if (err)
            {
                reject(err)
            }
            else
            {
                let users= data.users;
                if(users.filter(x=> x.userName==obj.userName))
                {
                    x.userName= obj.userName;
                    x.password= obj.password;
                    x.createdDay= obj.createdDay;
                }

                resolve('updated!');
            }
        })
    })
}

const getUser = (username) =>
{
    return new Promise ((resolve, reject)=>
    {
        jFile.readFile(__dirname + "../dataBase/users.json", function (err,data)
        {
            if (err)
            {
                reject(err)
            }
            else
            {
                let users= data.users;
                if(users.filter(x=> x.userName==username))
                {
                    resolve(data);
                }
            }
        })
    })
}

const getUserById = (id) =>
{
    return new Promise ((resolve, reject)=>
    {
        jFile.readFile(__dirname + "../dataBase/users.json", function (err,data)
        {
            if (err)
            {
                reject(err)
            }
            else
            {
                let users= data.users;
                if(users.filter(x=> x.id==id))
                {
                    resolve(data);
                }
            }
        })
    })
}
module.exports= {getUsers, saveUser, deleteUser, updateUser, getUser, getUserById}
