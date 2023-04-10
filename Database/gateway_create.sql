drop table gateway CASCADE;
drop table device CASCADE;


Create table IF NOT EXISTS gateway (
   GATEWAY_ID   VARCHAR PRIMARY KEY,
   GATEWAY_NAME  VARCHAR,
   IPv4   VARCHAR
   );

CREATE TABLE IF NOT EXISTS device (
  DEVICE_ID    INTEGER PRIMARY KEY,
  DEVICE_VENDOR       VARCHAR,
  CREATED_DATE       DATE,
  STATUS              BOOLEAN
   CONSTRAINT fk_gateway FOREIGN KEY(gateway_id) REFERENCES gateway(gateway_id)
);