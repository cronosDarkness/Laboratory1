const functions = require('./index');
const context = require('../testing/Context');

test('Http trigger', async() => {
    const request ={
        query : { name: 'JesusCastro' }
    };

    await functions(context, request);
    expect(context.res.body).toEqual('Welcome, JesusCastro');
    expect(context.log.mock.calls.length).toBe(1);
});