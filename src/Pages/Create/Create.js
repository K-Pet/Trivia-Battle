import { Button, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import "./Create.css";
import { db } from "../../firebase";
import {
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";

function App() {

    const [newQuestion, setQuestion] = useState([""]);
    const [correctAnswer, setCorrectAnswer] = useState("");

    const [choice1,setChoice1] = useState("");
    const [choice2,setChoice2] = useState("");
    const [choice3,setChoice3] = useState("");
    const [choice4,setChoice4] = useState("");


    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "questions");

    const createUser = async () => {
        await addDoc(usersCollectionRef, { question: newQuestion, correct: correctAnswer, answers: [choice1,choice2,choice3,choice4]} );
    };

    const deleteUser = async (id) => {
        const userDoc = doc(db, "questions", id);
        await deleteDoc(userDoc);
    };

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getUsers();
    }, []);

    return (
        <div className="App">
            <TextField
                style={{ marginBottom: 25 }}
                label="Question..."
                variant="outlined"
                onChange={(event) => {
                    setQuestion(event.target.value);
                }}
            />
            <br/><TextField
                style={{ marginBottom: 25 }}
                label="Correct Answer"
                variant="outlined"
                onChange={(event) => {
                    setCorrectAnswer(event.target.value);
                }}
            />
            <br/><TextField
            placeholder="Choice 1"
            onChange={(event) => {
                setChoice1(event.target.value);
            }}
        />
            <br/><TextField
            placeholder="Choice 2"
            onChange={(event) => {
                setChoice2(event.target.value);
            }}
        />
            <br/><TextField
            placeholder="Choice 3"
            onChange={(event) => {
                setChoice3(event.target.value);
            }}
        />
            <br/><TextField
            placeholder="Choice 4"
            onChange={(event) => {
                setChoice4(event.target.value);
            }}
        />
            <br/><Button onClick={createUser}> Save Question</Button>

            {users.map((user) => {
                return (
                    <div>
                        {" "}
                        <h1>Question: {user.question}</h1>
                        <h2>A: {user.answers[0]}</h2>
                        <h2>B: {user.answers[1]}</h2>
                        <h2>C: {user.answers[2]}</h2>
                        <h2>D: {user.answers[3]}</h2>
                        <button
                            onClick={() => {
                                deleteUser(user.id);
                            }} >
                            {" "}
                            Delete Question
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default App;
