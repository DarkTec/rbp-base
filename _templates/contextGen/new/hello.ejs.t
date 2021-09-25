---
to: src/context/<%=name%>Context.tsx
---
import React, { createContext, useState } from "react";

export const <%=name%>Reducer = {
    someValue: false,
    flipSomeValue(cb) {
        <%=name%>Reducer.someValue = !<%=name%>Reducer.someValue;
        if (cb) setTimeout(cb, 100);
    }
};

export function useProvide<%=name.replace(/\w/, c => c.toUpperCase())%>() {
    const [user, setUser] = useState(false);

    const flipSomeValue = cb => {
        return <%=name%>Reducer.flipSomeValue(() => {
            setUser(!user);
            cb();
        });
    };

    return {
        user,
        flipSomeValue,
    };
}

export function Provide<%=name.replace(/\w/, c => c.toUpperCase())%>({ children }) {
    const provider = useProvide<%=name.replace(/\w/, c => c.toUpperCase())%>();
    return (
        < <%=name%>Context.Provider value={provider}>
            {children}
        </<%=name%>Context.Provider>
    );
}

export const <%=name%>Context = createContext<any>({});