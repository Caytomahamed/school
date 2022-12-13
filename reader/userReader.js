const bcrypt = require('bcrypt');
const db = require('../database/dbConfig');

const select = aut => {
  if (aut) {
    return db('users as u')
      .join('roles as r', 'u.roleId', 'r.id')
      .select(
        'u.id',
        'fristName',
        'secondName',
        'password',
        'email',
        'imageProfile',
        'roleName',
        'createAt',
        'updateAt'
      )
      .where('active', true);
  }
  return db('users as u')
    .join('roles as r', 'u.roleId', 'r.id')
    .select(
      'u.id',
      'fristName',
      'secondName',
      'imageProfile',
      'email',
      'roleName',
      'createAt',
      'updateAt'
    )
    .where('active', true);
};

exports.read = () => {
  return select();
};

exports.readBy = async filter => {
  return await select(filter.auth).where(`${filter.condition}`, filter.field);
};

exports.readById = id => {
  return select().where('u.id', id);
};

exports.readerCreate = async user => {
  let id; //createUserId

  // access his role
  await db.transaction(async trx => {
    let roleIdToUse;
    const [role] = await trx('roles').where('roleName', user.roleName);
    if (role) {
      roleIdToUse = role.id;
    } else {
      roleIdToUse = 2;
    }
    {
    }

    // hash password
    const hash = await bcrypt.hashSync(user.password, 12);

    // create user
    const [userId] = await trx('users').insert({
      fristName: user.fristName,
      secondName: user.secondName,
      imageProfile: user.imageProfile,
      password: hash,
      email: user.email,
      createAt: user.createAt,
      roleId: roleIdToUse,
    });

    id = userId;
  });

  return this.readById(id);
};
