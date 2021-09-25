---
to: src/hooks/<%=name%>.ts
---
const use<%=name.replace(/\w/, c => c.toUpperCase())%> = () => {
    
    // Do something

};

export default use<%=name.replace(/\w/, c => c.toUpperCase())%>;