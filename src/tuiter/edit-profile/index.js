import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateUser} from "../reducers/profile-reducer";
import {Link} from "react-router-dom";

const EditProfile = () => {
    const user = useSelector(
        (state) => state.profile);
    const [name, setNameString] = useState(user.firstName +" "+ user.lastName);
    const [bio, setBio] = useState(user.bio);
    const [location, setLocation] = useState(user.location);
    const [website, setWebsite] = useState(user.website);
    const [date, setDate] = useState(user.dateOfBirth);

    const dispatch = useDispatch();
    const saveUser = () => {
        const payload = {}
        payload.name = name;
        payload.bio = bio;
        payload.location = location;
        payload.website = website;
        payload.dateOfBirth = date;
        dispatch(updateUser(payload));
    }
    return (
        <>
            <div className="fs-3">
                <span><Link to="/tuiter/profile" className="text-black text-decoration-none">
                    <i className="bi bi-x-lg">
                </i></Link></span> Edit Profile</div>
            <img src = "/images/starship.jpeg"
                 style= {{
                     width: `100%`,
                     maxHeight: `200px`,
                     overflow: `hidden`
                 }}
            />
            <img src = "/images/spacex.jpeg"
                 className="rounded-circle float-start zindex-popover position-relative" height={100}
                 style={{
                     marginTop : `-50px`,
                     marginLeft : `20px`
                 }}
            />
            <form style={{marginTop:50}}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control border-opacity-0" id="name" aria-describedby="name"
                           placeholder="name" value={name.toString()}
                           onChange={(e) => setNameString(e.target.value)}></input>
                </div>

                <div className="form-group">
                    <label htmlFor="bio">Bio</label>
                    <textarea className="form-control border-opacity-0" id="bio" aria-describedby="bio"
                              placeholder="bio" value={bio.toString()}
                              onChange={(e) => setBio(e.target.value)}></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input type="text" className="form-control border-opacity-0" id="location" aria-describedby="location"
                           placeholder="location" value={location.toString()}
                           onChange={(e) => setLocation(e.target.value)}></input>
                </div>

                <div className="form-group">
                    <label htmlFor="website">Website</label>
                    <input type="text" className="form-control border-opacity-0" id="website" aria-describedby="website"
                           placeholder="website" value={website.toString()}
                           onChange={(e) => setWebsite(e.target.value)}></input>
                </div>

                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input type="date" className="form-control border-opacity-0 w-25" id="date" aria-describedby="date"
                           placeholder="date" value={date.toString()}
                           onChange={(e) => setDate(e.target.value)}></input>
                </div>
                <br/>
                <Link to="/tuiter/profile"><button type="submit" className="btn btn-primary"
                                                   onClick={saveUser}>Save</button></Link>
                <br/>
                <div>Switch to Professional</div>
            </form>
        </>

    );
}
export default EditProfile;

