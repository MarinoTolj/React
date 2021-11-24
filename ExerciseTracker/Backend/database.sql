CREATE DATABASE ExerciseTracker;

CREATE TABLE exercise(
    exercise_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    exercise_type_id SERIAL NOT NULL,

    CONSTRAINT exercise_type_id
        FOREIGN KEY (exercise_type_id)
            REFERENCES exercise_type(exercise_type_id)
);

DROP TABLE exercise;

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY NOT NULL,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    UNIQUE(email)
    /* users_exercises_id SERIAL,

    CONSTRAINT users_exercises_id
        FOREIGN KEY (users_exercises_id)
            REFERENCES exercise_type(users_exercises_id) */
);

CREATE TABLE users_exercises(
    users_exercises_id SERIAL PRIMARY KEY NOT NULL,
    exercise_id INT,
    user_id INT,

    CONSTRAINT exercise_id
        FOREIGN KEY (exercise_id)
            REFERENCES exercise(exercise_id),
            
    CONSTRAINT user_id
        FOREIGN KEY (user_id)
            REFERENCES users(user_id)
);

CREATE TABLE exercise_type(
    exercise_type_id SERIAL PRIMARY KEY NOT NULL,
    type VARCHAR(255) NOT NULL
);

DROP TABLE exercise_type;

DELETE FROM users;
ALTER SEQUENCE users_user_id_seq RESTART WITH 0;

SELECT * FROM public.exercise
JOIN public.exercise_type ON
public.exercise.exercise_type_id=public.exercise_type.exercise_type_id


