const Users = (props) => {
    return (
        <div>
            {props.users.map((user, index) => {
                return (
                    <p key={index}>
                        {user.name}
                        <button onClick={() => props.removeUser(index)}>Remove</button>
                    </p>
                );
            })}
        </div>
    );
}


export default Users;