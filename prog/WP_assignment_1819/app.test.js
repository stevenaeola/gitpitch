
'use strict';

const request = require('supertest');
const app = require('./app');

function checkDeliaDerbyshire(res)
{

    const jContent = res.body;
    if(typeof jContent !== 'object'){
	throw new Error('not an object');
    }

    if(jContent['surname'] !== 'Derbyshire'){
	console.log(jContent);
	throw new Error('surname should be Derbyshire');
    }

    if(jContent['forename'] !== 'Delia'){
	throw new Error('forename should be Delia');
    }
}

// thanks to Nico Tejera at https://stackoverflow.com/questions/1714786/query-string-encoding-of-a-javascript-object
// returns something like "access_token=concertina&username=bobthebuilder"
function serialise(obj){
    return Object.keys(obj).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`).join('&');
}

describe('Test the people service', () => {
    test('GET /people succeeds', () => {
        return request(app)
	    .get('/people')
	    .expect(200);
    });

    test('GET /people returns JSON', () => {
        return request(app)
	    .get('/people')
	    .expect('Content-type', /json/);
    });

    test('GET /people includes doctorwhocomposer', () => {
        return request(app)
	    .get('/people')
	    .expect(/doctorwhocomposer/);
    });

    test('GET /people/doctorwhocomposer succeeds', () => {
        return request(app)
	    .get('/people/doctorwhocomposer')
	    .expect(200);
    });

    test('GET /people/doctorwhocomposer returns JSON', () => {
        return request(app)
	    .get('/people/doctorwhocomposer')
	    .expect('Content-type', /json/);
    });

    test('GET /people/doctorwhocomposer includes name details', () => {
        return request(app)
	    .get('/people/doctorwhocomposer')
	    .expect(checkDeliaDerbyshire);
    });


    test('POST /people needs access_token', () => {
        return request(app)
	    .post('/people')
	    .expect(403);
    });

    test('POST /people cannot replicate', () => {
	const params = {access_token: 'concertina',
			username: 'doctorwhocomposer',
			forename: 'Bob',
			surname: 'Builder'};
        return request(app)
	    .post('/people')
	    .send(serialise(params))
	    .expect(400);
    });

});
