import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ProfileComponent = () => {
    const user = useSelector(
        (state) => state.profile);
    return(
        <>
            <Link to="/tuiter/home" className="text-decoration-none text-black">
                <i className="bi bi-arrow-left fs-3 fw-bold" style={{fontStyle:"normal"}}>   {user.firstName} {user.lastName}</i>
            </Link>
            <div>
                <div>
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
                    <button className="rounded-pill border-secondary fw-bold bg-white border-opacity-25 float-end mt-2 me-2"
                            style={{
                                "height": "40px",
                                "width": "150px"
                            }}>
                        <Link to="/tuiter/edit-profile">Edit Profile</Link>

                    </button>
                </div>
                <div style={{marginTop:75, marginLeft:20}}>
                    <h3 className="fw-bold">{user.firstName} {user.lastName}</h3>
                    <div className="text-secondary mb-3" style={{marginTop:`-10px`}}>{user.handle}</div>
                    <div className="text-secondary mb-3" style={{marginTop:`-20px`}}>{user.website}</div>
                    <p>{user.bio}</p>
                    <i className="bi bi-geo-alt pe-4" style={{fontStyle:"normal"}}>{user.location}</i>
                    <i className="bi bi-geo pe-4" style={{fontStyle:"normal"}}> Born {user.dateOfBirth}</i>
                    <i className="bi bi-calendar pe-4" style={{fontStyle:"normal"}}> Joined {user.dateJoined}</i>
                    <div className="mt-2">
                        <div className="float-start pe-4" style={{fontStyle:"normal"}}><span className="fw-bold">{user.followingCount}</span> Following</div>
                        <div className="float-start pe-4" style={{fontStyle:"normal"}}><span className="fw-bold">{user.followersCount}</span> Followers</div>
                    </div>

                </div>
            </div>
        </>
    );
};
export default ProfileComponent;

