--
-- PostgreSQL database dump
--

-- Dumped from database version 13.13 (Ubuntu 13.13-1.pgdg22.04+1)
-- Dumped by pg_dump version 13.13 (Ubuntu 13.13-1.pgdg22.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: excursions; Type: TABLE; Schema: public; Owner: nicole
--

CREATE TABLE public.excursions (
    excursion_id integer NOT NULL,
    trip_id integer,
    price integer,
    start_time timestamp without time zone,
    end_time timestamp without time zone,
    title character varying NOT NULL,
    description character varying,
    lattitude integer,
    longitude integer,
    street_address character varying,
    excursion_type character varying
);


ALTER TABLE public.excursions OWNER TO nicole;

--
-- Name: excursions_excursion_id_seq; Type: SEQUENCE; Schema: public; Owner: nicole
--

CREATE SEQUENCE public.excursions_excursion_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.excursions_excursion_id_seq OWNER TO nicole;

--
-- Name: excursions_excursion_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: nicole
--

ALTER SEQUENCE public.excursions_excursion_id_seq OWNED BY public.excursions.excursion_id;


--
-- Name: photos; Type: TABLE; Schema: public; Owner: nicole
--

CREATE TABLE public.photos (
    photo_id integer NOT NULL,
    user_id integer,
    trip_id integer,
    title character varying NOT NULL,
    description character varying,
    comment character varying,
    "timestamp" timestamp without time zone,
    location character varying,
    photo_url character varying
);


ALTER TABLE public.photos OWNER TO nicole;

--
-- Name: photos_photo_id_seq; Type: SEQUENCE; Schema: public; Owner: nicole
--

CREATE SEQUENCE public.photos_photo_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.photos_photo_id_seq OWNER TO nicole;

--
-- Name: photos_photo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: nicole
--

ALTER SEQUENCE public.photos_photo_id_seq OWNED BY public.photos.photo_id;


--
-- Name: trips; Type: TABLE; Schema: public; Owner: nicole
--

CREATE TABLE public.trips (
    trip_id integer NOT NULL,
    user_id integer,
    title character varying,
    description character varying,
    start_date timestamp without time zone,
    end_date timestamp without time zone,
    budget integer
);


ALTER TABLE public.trips OWNER TO nicole;

--
-- Name: trips_trip_id_seq; Type: SEQUENCE; Schema: public; Owner: nicole
--

CREATE SEQUENCE public.trips_trip_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.trips_trip_id_seq OWNER TO nicole;

--
-- Name: trips_trip_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: nicole
--

ALTER SEQUENCE public.trips_trip_id_seq OWNED BY public.trips.trip_id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: nicole
--

CREATE TABLE public.users (
    user_id integer NOT NULL,
    email character varying NOT NULL,
    password character varying NOT NULL
);


ALTER TABLE public.users OWNER TO nicole;

--
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: public; Owner: nicole
--

CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_user_id_seq OWNER TO nicole;

--
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: nicole
--

ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;


--
-- Name: wishes; Type: TABLE; Schema: public; Owner: nicole
--

CREATE TABLE public.wishes (
    wish_id integer NOT NULL,
    wishlist_id integer,
    excursion_id integer,
    title character varying,
    location character varying,
    activity character varying
);


ALTER TABLE public.wishes OWNER TO nicole;

--
-- Name: wishes_wish_id_seq; Type: SEQUENCE; Schema: public; Owner: nicole
--

CREATE SEQUENCE public.wishes_wish_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.wishes_wish_id_seq OWNER TO nicole;

--
-- Name: wishes_wish_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: nicole
--

ALTER SEQUENCE public.wishes_wish_id_seq OWNED BY public.wishes.wish_id;


--
-- Name: wishlists; Type: TABLE; Schema: public; Owner: nicole
--

CREATE TABLE public.wishlists (
    wishlist_id integer NOT NULL,
    user_id integer,
    title character varying,
    description character varying
);


ALTER TABLE public.wishlists OWNER TO nicole;

--
-- Name: wishlists_wishlist_id_seq; Type: SEQUENCE; Schema: public; Owner: nicole
--

CREATE SEQUENCE public.wishlists_wishlist_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.wishlists_wishlist_id_seq OWNER TO nicole;

--
-- Name: wishlists_wishlist_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: nicole
--

ALTER SEQUENCE public.wishlists_wishlist_id_seq OWNED BY public.wishlists.wishlist_id;


--
-- Name: excursions excursion_id; Type: DEFAULT; Schema: public; Owner: nicole
--

ALTER TABLE ONLY public.excursions ALTER COLUMN excursion_id SET DEFAULT nextval('public.excursions_excursion_id_seq'::regclass);


--
-- Name: photos photo_id; Type: DEFAULT; Schema: public; Owner: nicole
--

ALTER TABLE ONLY public.photos ALTER COLUMN photo_id SET DEFAULT nextval('public.photos_photo_id_seq'::regclass);


--
-- Name: trips trip_id; Type: DEFAULT; Schema: public; Owner: nicole
--

ALTER TABLE ONLY public.trips ALTER COLUMN trip_id SET DEFAULT nextval('public.trips_trip_id_seq'::regclass);


--
-- Name: users user_id; Type: DEFAULT; Schema: public; Owner: nicole
--

ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);


--
-- Name: wishes wish_id; Type: DEFAULT; Schema: public; Owner: nicole
--

ALTER TABLE ONLY public.wishes ALTER COLUMN wish_id SET DEFAULT nextval('public.wishes_wish_id_seq'::regclass);


--
-- Name: wishlists wishlist_id; Type: DEFAULT; Schema: public; Owner: nicole
--

ALTER TABLE ONLY public.wishlists ALTER COLUMN wishlist_id SET DEFAULT nextval('public.wishlists_wishlist_id_seq'::regclass);


--
-- Data for Name: excursions; Type: TABLE DATA; Schema: public; Owner: nicole
--

COPY public.excursions (excursion_id, trip_id, price, start_time, end_time, title, description, lattitude, longitude, street_address, excursion_type) FROM stdin;
\.


--
-- Data for Name: photos; Type: TABLE DATA; Schema: public; Owner: nicole
--

COPY public.photos (photo_id, user_id, trip_id, title, description, comment, "timestamp", location, photo_url) FROM stdin;
\.


--
-- Data for Name: trips; Type: TABLE DATA; Schema: public; Owner: nicole
--

COPY public.trips (trip_id, user_id, title, description, start_date, end_date, budget) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: nicole
--

COPY public.users (user_id, email, password) FROM stdin;
1	nyeager95@gmail.com	nicole
\.


--
-- Data for Name: wishes; Type: TABLE DATA; Schema: public; Owner: nicole
--

COPY public.wishes (wish_id, wishlist_id, excursion_id, title, location, activity) FROM stdin;
\.


--
-- Data for Name: wishlists; Type: TABLE DATA; Schema: public; Owner: nicole
--

COPY public.wishlists (wishlist_id, user_id, title, description) FROM stdin;
\.


--
-- Name: excursions_excursion_id_seq; Type: SEQUENCE SET; Schema: public; Owner: nicole
--

SELECT pg_catalog.setval('public.excursions_excursion_id_seq', 1, false);


--
-- Name: photos_photo_id_seq; Type: SEQUENCE SET; Schema: public; Owner: nicole
--

SELECT pg_catalog.setval('public.photos_photo_id_seq', 1, false);


--
-- Name: trips_trip_id_seq; Type: SEQUENCE SET; Schema: public; Owner: nicole
--

SELECT pg_catalog.setval('public.trips_trip_id_seq', 1, false);


--
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: nicole
--

SELECT pg_catalog.setval('public.users_user_id_seq', 1, true);


--
-- Name: wishes_wish_id_seq; Type: SEQUENCE SET; Schema: public; Owner: nicole
--

SELECT pg_catalog.setval('public.wishes_wish_id_seq', 1, false);


--
-- Name: wishlists_wishlist_id_seq; Type: SEQUENCE SET; Schema: public; Owner: nicole
--

SELECT pg_catalog.setval('public.wishlists_wishlist_id_seq', 1, false);


--
-- Name: excursions excursions_pkey; Type: CONSTRAINT; Schema: public; Owner: nicole
--

ALTER TABLE ONLY public.excursions
    ADD CONSTRAINT excursions_pkey PRIMARY KEY (excursion_id);


--
-- Name: photos photos_pkey; Type: CONSTRAINT; Schema: public; Owner: nicole
--

ALTER TABLE ONLY public.photos
    ADD CONSTRAINT photos_pkey PRIMARY KEY (photo_id);


--
-- Name: trips trips_pkey; Type: CONSTRAINT; Schema: public; Owner: nicole
--

ALTER TABLE ONLY public.trips
    ADD CONSTRAINT trips_pkey PRIMARY KEY (trip_id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: nicole
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: nicole
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- Name: wishes wishes_pkey; Type: CONSTRAINT; Schema: public; Owner: nicole
--

ALTER TABLE ONLY public.wishes
    ADD CONSTRAINT wishes_pkey PRIMARY KEY (wish_id);


--
-- Name: wishlists wishlists_pkey; Type: CONSTRAINT; Schema: public; Owner: nicole
--

ALTER TABLE ONLY public.wishlists
    ADD CONSTRAINT wishlists_pkey PRIMARY KEY (wishlist_id);


--
-- Name: excursions excursions_trip_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: nicole
--

ALTER TABLE ONLY public.excursions
    ADD CONSTRAINT excursions_trip_id_fkey FOREIGN KEY (trip_id) REFERENCES public.trips(trip_id);


--
-- Name: photos photos_trip_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: nicole
--

ALTER TABLE ONLY public.photos
    ADD CONSTRAINT photos_trip_id_fkey FOREIGN KEY (trip_id) REFERENCES public.trips(trip_id);


--
-- Name: photos photos_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: nicole
--

ALTER TABLE ONLY public.photos
    ADD CONSTRAINT photos_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);


--
-- Name: trips trips_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: nicole
--

ALTER TABLE ONLY public.trips
    ADD CONSTRAINT trips_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);


--
-- Name: wishes wishes_excursion_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: nicole
--

ALTER TABLE ONLY public.wishes
    ADD CONSTRAINT wishes_excursion_id_fkey FOREIGN KEY (excursion_id) REFERENCES public.excursions(excursion_id);


--
-- Name: wishes wishes_wishlist_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: nicole
--

ALTER TABLE ONLY public.wishes
    ADD CONSTRAINT wishes_wishlist_id_fkey FOREIGN KEY (wishlist_id) REFERENCES public.wishlists(wishlist_id);


--
-- Name: wishlists wishlists_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: nicole
--

ALTER TABLE ONLY public.wishlists
    ADD CONSTRAINT wishlists_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);


--
-- PostgreSQL database dump complete
--

