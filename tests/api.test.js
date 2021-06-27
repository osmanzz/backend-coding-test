'use strict';

const request = require('supertest');

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

const app = require('../src/app')(db);
const buildSchemas = require('../src/schemas');

describe('API tests', () => {
    before((done) => {
        db.serialize((err) => { 
            if (err) {
                return done(err);
            }

            buildSchemas(db);

            done();
        });
    });

    describe('GET /health', () => {
        it('should return health', (done) => {
            request(app)
                .get('/health')
                .expect('Content-Type', /text/)
                .expect(200, done);
        });
    });
    
    describe('POST /rides', () => {
        it('should return value', (done) => {
            request(app)
                .post('/rides')
                .send({
                    start_lat:'0',
                    start_long:'0',
                    end_lat:'0',
                    end_long:'0',
                    rider_name:'osman',
                    driver_name:'osman',
                    driver_vehicle:'osman'
                })
                .expect(200,done)
                // .then(res =>{
                //     expect(res.body.riderID).to.exist;
                // })
                .end((err, res) => {
                    done();
                });
        });
    });
    describe('POST /rides', () => {
        it('should return wrong variable start_lat', (done) => {
            request(app)
                .post('/rides')
                .send({
                    start_lat:'200',
                    start_long:'0',
                    end_lat:'0',
                    end_long:'0',
                    rider_name:'osman',
                    driver_name:'osman',
                    driver_vehicle:'osman'
                })
                .expect(400,done)
                // .then(res =>{
                //     expect(res.body.riderID).to.exist;
                // })
                .end((err, res) => {
                    done();
                });
        });
    });

    describe('POST /rides', () => {
        it('should return wrong variable start_long', (done) => {
            request(app)
                .post('/rides')
                .send({
                    start_lat:'0',
                    start_long:'200',
                    end_lat:'0',
                    end_long:'0',
                    rider_name:'osman',
                    driver_name:'osman',
                    driver_vehicle:'osman'
                })
                .expect(400,done)
                // .then(res =>{
                //     expect(res.body.riderID).to.exist;
                // })
                .end((err, res) => {
                    done();
                });
        });
    });

    
    describe('POST /rides', () => {
        it('should return wrong variable end_lat', (done) => {
            request(app)
                .post('/rides')
                .send({
                    start_lat:'0',
                    start_long:'0',
                    end_lat:'200',
                    end_long:'0',
                    rider_name:'osman',
                    driver_name:'osman',
                    driver_vehicle:'osman'
                })
                .expect(400,done)
                // .then(res =>{
                //     expect(res.body.riderID).to.exist;
                // })
                .end((err, res) => {
                    done();
                });
        });
    });

    
    describe('POST /rides', () => {
        it('should return wrong variable end_long', (done) => {
            request(app)
                .post('/rides')
                .send({
                    start_lat:'0',
                    start_long:'0',
                    end_lat:'0',
                    end_long:'200',
                    rider_name:'osman',
                    driver_name:'osman',
                    driver_vehicle:'osman'
                })
                .expect(400,done)
                // .then(res =>{
                //     expect(res.body.riderID).to.exist;
                // })
                .end((err, res) => {
                    done();
                });
        });
    });

    describe('POST /rides', () => {
        it('should return wrong variable end_long', (done) => {
            request(app)
                .post('/rides')
                .send({
                    start_lat:'0',
                    start_long:'0',
                    end_lat:'0',
                    end_long:'0',
                    driver_name:'osman',
                    driver_vehicle:'osman'
                })
                .expect(400,done)
                // .then(res =>{
                //     expect(res.body.riderID).to.exist;
                // })
                .end((err, res) => {
                    done();
                });
        });
    });

    describe('POST /rides', () => {
        it('should return wrong variable end_long', (done) => {
            request(app)
                .post('/rides')
                .send({
                    start_lat:'0',
                    start_long:'0',
                    end_lat:'0',
                    end_long:'0',
                    rider_name:'s',
                    driver_vehicle:'osman'
                })
                .expect(400,done)
                // .then(res =>{
                //     expect(res.body.riderID).to.exist;
                // })
                .end((err, res) => {
                    done();
                });
        });
    });

    
    describe('POST /rides', () => {
        it('should return wrong variable end_long', (done) => {
            request(app)
                .post('/rides')
                .send({
                    start_lat:'0',
                    start_long:'0',
                    end_lat:'0',
                    end_long:'0',
                    rider_name:'s',
                    driver_name:'s',
                })
                .expect(400,done)
                // .then(res =>{
                //     expect(res.body.riderID).to.exist;
                // })
                .end((err, res) => {
                    done();
                });
        });
    });
         
    describe('GET /rides', () => {
        it('should return value', (done) => {
            request(app)
                .get('/rides/1')
                .expect(200,done);
        });
    });
    
    describe('GET /rides', () => {
        it('should return value', (done) => {
            request(app)
                .get('/rides/1/2')
                .expect(200,done);
        });
    });
});