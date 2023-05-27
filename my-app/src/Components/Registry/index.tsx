import "../../App.scss";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

export const Registration = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
};