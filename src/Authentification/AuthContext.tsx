import { useState, createContext, useContext, useEffect, ReactNode } from "react";
import {auth, db} from '../Firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, Auth, User, UserCredential } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

interface Props {
    children: ReactNode
}

export interface AuthContextModel {
    auth: Auth
    user: User | null
    logIn: (email: string, password: string) => Promise<UserCredential>
    signUp: (email: string, password: string) => Promise<UserCredential>
    logOut: () => Promise<void>
  }

  const AuthContext = createContext<AuthContextModel>(
    {} as AuthContextModel,
  )

export function AuthContextProvider({children}: Props) {
    const [user, setUser] = useState<User | null>(null)

    function signUp(email: string, password: string): Promise<UserCredential> {
        setDoc(doc(db, 'users', email), {
            showMovies: []
        })
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function logIn(email: string, password: string) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logOut(): Promise<void> {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser!);
        });
        return () => {
          unsubscribe();
        };
      });

      const values: AuthContextModel = {signUp, logIn, logOut, user, auth}

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}


export function UserAuth() {
    return useContext(AuthContext)
}