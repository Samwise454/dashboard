import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import { Link, useNavigate } from 'react-router-dom';

const Admin = () => {
    const url = 'https://smart.esbatech.org/admin.php';

    const [who, setWho] = useState("");
    const [fetchWho, setFetchWho] = useState(localStorage.getItem("adForm"));
    const [allData, setAllData] = useState({});
    const [anyData, setAnyData] = useState(false);
    const navigate = useNavigate();

    //useEffect to fetch data and hide loader afterwards
    useEffect(() => {
        if (fetchWho === null) {
            navigate("/");
        }
        else if (fetchWho === "#Admin#1") {
            setWho("Admin 1");
        }
        else if (fetchWho === "#Admin#_2") {
            setWho("Admin 2");
        }
    }, []);

    const fetchData = (e) => {
        let loader = document.querySelector("#loader5");
        loader.style.display = "flex";

        let formInput = {
            data: e.target.id
        }

        fetch(url, {
            method: "POST",
            body: JSON.stringify(formInput)
        })
        .then(response => {
            if (!response.ok) {
                setAnyData(false);
                loader.style.display = "none";
            }
            return response.json(); 
        })
        .then(data => {
            // Process the fetched image first and then send the form
            // console.log(data);
            if (data.code === "sw200") {
                setAllData(data.msg);
                loader.style.display = "none";
                setAnyData(true);
            }
            else {
                setAnyData(false);
                loader.style.display = "none";
            }
        })
        .catch(error => {
            setAnyData(false);
            loader.style.display = "none";
        });
    }

    const handleFilter = (e) => {
        let id = e.target.id;
        let filterValue = e.target.value;

        if (id === "lgaAdmin") {
            navigate(`/Dashboard?${id + "=" + filterValue}`);
        }
        else if (id === "genderAdmin") {
            navigate(`/Dashboard?${id + "=" + filterValue}`);
        }
    }

    const logout = () => {
        localStorage.clear("adForm");
        navigate("/");
    }

  return (
    <div className='mainForm1'>
        <Nav></Nav>

        <section id='loader5' className='mt-8 relative'>
            <section className='fixed top-0 left-0 bg-white w-full h-screen z-10 flex align-center justify-center'>
                <span className="loader mt-90"></span>
            </section>
        </section>

        <div>
            <section className='bg-blue-900 text-xl text-white mt-4 p-4 relative'>
                <b>Welcome {who.user}</b>

                {/* <Link to={''}> */}
                <button onClick={logout} className='absolute top-0 right-0 bg-white rounded-md py-2 px-3 cursor-pointer text-blue-900 text-sm mt-3 mr-3'>Logout</button>
                {/* </Link> */}
            </section>

            <section id="controlButton" className='flex align-center justify-center mt-4'>
                <button onClick={fetchData} id='atma' className='conBtn my-5 mx-2 text-sm rounded-md'>Ocha Data</button>
                <button onClick={fetchData} id='apga' className='conBtn my-5 mx-2 text-sm rounded-md'>APGA Data</button>
                <button onClick={fetchData} id='smart' className='conBtn my-5 mx-2 text-sm rounded-md'>Smart Teachers</button>
            </section>

            {anyData === true ? 
                <div>
                    {/* Statistics */}
                    <div className='mt-8 p-2 flex flex-wrap align-center justify-center gap-7'>
                        <section className='flex align-center justify-center flex-col text-center shadow-md rounded-sm p-3 w-max'>
                            <p className='mb-2'>
                                <b>{allData.reg}</b>
                            </p>
                            <span className='text-sm text-blue-800'>
                                Total Registered
                            </span>
                        </section>

                        <section className='flex align-center justify-center flex-col text-center shadow-md rounded-sm p-3 w-max'>
                            <p className='mb-2'>
                                <b>{allData.female}</b>
                            </p>
                            <span className='text-sm text-blue-800'>
                                Total Females
                            </span>
                        </section>

                        <section className='flex align-center justify-center flex-col text-center shadow-md rounded-sm p-3 w-max'>
                            <p className='mb-2'>
                                <b>{allData.male}</b>
                            </p>
                            <span className='text-sm text-blue-800'>
                                Total Males
                            </span>
                        </section>

                        <section className='flex align-center justify-center flex-col text-center shadow-md rounded-sm p-3 w-max'>
                            <p className='mb-2'>
                                <b>{allData.most}</b>
                            </p>
                            <span className='text-sm text-blue-800'>
                                Prominent LGA
                            </span>
                        </section>

                        <section className='flex align-center justify-center flex-col text-center shadow-md rounded-sm p-3 w-max'>
                            <p className='mb-2'>
                                <b>{allData.least}</b>
                            </p>
                            <span className='text-sm text-blue-800'>
                                Least LGA
                            </span>
                        </section>

                        <section className='flex align-center justify-center flex-col text-center shadow-md rounded-sm p-3 w-max'>
                            <p className='mb-2'>
                                <b>{allData.percent} %</b>
                            </p>
                            <span className='text-sm text-blue-800'>
                                % Progress
                            </span>
                        </section>
                    </div>

                    {/* Controls */}
                    <div className='mt-10 text-center mx-1 p-2'>
                        <h2 className=' bg-blue-950 mx-8 text-blue-50 rounded-md p-3'>
                            Filter Data: 
                        </h2>

                        <div className='mt-1 p-2 flex flex-wrap align-center justify-center gap-7 shadow-md py-8'>
                            <select name="lga" id="lgaAdmin" className='mb-2 shadow-md p-2 outline-0 border-0' onChange={handleFilter}>
                                <option value="" hidden>By Lga</option>
                                <option value="Aguata">Aguata</option>
                                <option value="Anambra East">Anambra East</option>
                                <option value="Anambra West">Anambra West</option>
                                <option value="Anaocha">Anaocha</option>
                                <option value="Awka North">Awka North</option>
                                <option value="Awka South">Awka South</option>
                                <option value="Ayamelum">Ayamelum</option>
                                <option value="Dunukofia">Dunukofia</option>
                                <option value="Ekwusigo">Ekwusigo</option>
                                <option value="Idemili North">Idemili North</option>
                                <option value="Idemili South">Idemili South</option>
                                <option value="Ihiala">Ihiala</option>
                                <option value="Njikoka">Njikoka</option>
                                <option value="Nnewi North">Nnewi North</option>
                                <option value="Nnewi South">Nnewi South</option>
                                <option value="Ogbaru">Ogbaru</option>
                                <option value="Onitsha North">Onitsha North</option>
                                <option value="Onitsha South">Onitsha South</option>
                                <option value="Orumba North">Orumba North</option>
                                <option value="Orumba South">Orumba South</option>
                                <option value="Oyi">Oyi</option>
                            </select>

                            <select name="gender" id="genderAdmin" className='mb-2 shadow-md p-2 outline-0 border-0' onChange={handleFilter}>
                                <option value="" hidden>By gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>


                        </div>
                    </div>
                </div>
            :
                <div className='text-red-600 text-center mt-10 shadow-sm m-2 p-2 pt-20 h-screen border-t-2'>
                    No Data Yet!
                </div>
            }
        </div>
    </div>
  )
}

export default Admin
