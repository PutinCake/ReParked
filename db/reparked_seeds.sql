USE reparked_db;

INSERT INTO rentersProfiles (RenterName, RenterEmail, password, createdAt, updatedAt ) VALUES ("Ralph", "ralph@gmail.com", "q12345", NOW(), NOW());
INSERT INTO rentersProfiles (RenterName, RenterEmail, password, createdAt, updatedAt) VALUES ("Jack", "jack@gmail.com", "q12345", NOW(), NOW());

INSERT INTO hostsProfiles (hostName, hostEmail, password, createdAt, updatedAt) VALUES ("Sam", "sam@email.com", "q12345", NOW(), NOW());
INSERT INTO hostsProfiles (hostName, hostEmail, password, createdAt, updatedAt) VALUES ("Elzabeth", "elizabeth@email.com", "q12345", NOW(), NOW());

INSERT INTO Listings (streetNumber, streetName, city, state, latitude, type, rate, createdAt, updatedAt) VALUES (1909, "Sacramento Avenue", "Berkeley", "CA", 37.872125, -122.281676, "driveway", 1.50, NOW(), NOW());
INSERT INTO Listings (streetNumber, streetName, city, state, longitude, type, rate, createdAt, updatedAt) VALUES (1801, "Berkeley Way", "Berkeley", "CA", 37.872366, -122.274616, "carport", 3, NOW(), NOW());

