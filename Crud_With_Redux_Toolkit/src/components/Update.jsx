import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ReadUserData, updateUser } from "../Redux_work/slice";

const Update = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const [update, setUpdate] = useState({});
    const { user, loading, error } = useSelector((state) => state.app);

    useEffect(() => {
        if (id) {
            const filterSingleUsers = user.find((users) => users.id === id);
            if (filterSingleUsers) {
                setUpdate(filterSingleUsers);
            }
        }
    }, [id, user]);

    useEffect(() => {
        dispatch(ReadUserData());
    }, [dispatch]);

    const getUserData = (e) => {
        const { name, value } = e.target;
        setUpdate({ ...update, [name]: value });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateUser({ id, ...update }))
            .unwrap()
            .then(() => {
                navigate('/Read_page'); 
            })
            .catch((err) => console.error("Failed to update user: ", err));
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="container">
            <h2>Update Data Form</h2>
            <form onSubmit={handleUpdate}>
                {/* Name Input */}
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Enter your name"
                        value={update.name || ""}
                        onChange={getUserData}
                    />
                </div>

                {/* Age Input */}
                <div className="form-group">
                    <label htmlFor="age">Age:</label>
                    <input
                        type="number"
                        className="form-control"
                        name="age"
                        id="age"
                        placeholder="Enter your age"
                        value={update.age || ""}
                        onChange={getUserData}
                    />
                </div>

                {/* Email Input */}
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        value={update.email || ""}
                        onChange={getUserData}
                    />
                </div>

                {/* Gender Radio Buttons */}
                <div className="form-group">
                    <label className="control-label">Choose Gender:&nbsp;&nbsp;&nbsp;</label>
                    <div className="radio-inline">
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="Male"
                                checked={update.gender === "Male"}
                                onChange={getUserData}
                            />
                            Male
                        </label>
                    </div>
                    <div className="radio-inline">
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="Female"
                                checked={update.gender === "Female"}
                                onChange={getUserData}
                            />
                            Female
                        </label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">
                    Update Data
                </button>
            </form>
        </div>
    );
};

export default Update;
