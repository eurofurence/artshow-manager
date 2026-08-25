CREATE TABLE exhibitor
(
    id UUID NOT NULL
        PRIMARY KEY
        REFERENCES "user",
);

CREATE TABLE exhibit
(
    id           UUID NOT NULL DEFAULT gen_random_uuid(),
    exhibitor_id UUID NOT NULL
        REFERENCES exhibitor,
);

CREATE TABLE bidder
(
    id UUID NOT NULL
        PRIMARY KEY
        REFERENCES "user",
);

CREATE TABLE bid_sticker
(
    id        UUID NOT NULL
        PRIMARY KEY,
    bidder_id UUID NOT NULL,
);
