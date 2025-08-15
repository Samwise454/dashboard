import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import { Link, useNavigate } from 'react-router-dom';

const Admin = () => {
    const url = 'https://smart.esbatech.org/admin.php';

    const [who, setWho] = useState("");
    const [fetchWho, setFetchWho] = useState(localStorage.getItem("adForm"));
    const [allData, setAllData] = useState({});
    const [anyData, setAnyData] = useState(false);
    const [wardData, setWardData] = useState("");
    const [pollWards, setPollWards] = useState([]);
    const [queryKey, setQueryKey] = useState("");
    const navigate = useNavigate();

    //useEffect to fetch data and hide loader afterwards
    useEffect(() => {
        if (fetchWho === null) {
            navigate("/");
        }
        else if (fetchWho === "#Admin#1") {
            setWho("Admin 1");

            //set the form details
            let allWards = `
                33|Prisons|Abacha|ABAGANA I|ABAGANA II|ABAGANA III|ABAGANA IV|Abatete|ABBA I|ABBA II|Abegbu/Iyiorah|Achalla I|Achalla II|Achalla III|Achina I|Achina II|Adazi Ani I|Adazi Ani II|Adazi Enu I|Adazi Enu II|Adazi Nnukwu I|Adazi Nnukwu II|AGBUDU|Aguleri I|Aguleri II||Agulu Ezechukwu|Agulu IAgulu II|Agulu III|Agulu IV|Aguluizigbo|AJALLI I (OBINIKPA)|AJALLI II (UMUABIAM) | AkiliOgidi/ Obeagwe |Akili Ozizo |Akpo |AKPU |Akwa |Akwaeze |AKWAIHEDI |Akwukwu |Alor 1 |Alor 2 |AMAETITI|Amakwa|Amamu 1|Amamu 2|Amansea|Amanuke |AMAOKPALA OMOGHO|Amawbia I|Amawbia II|Amawbia III|American quarters|Amesi|AMICHI I|AMICHI II|AMICHI III| Amorka| Anaku |Atani 1|Atani 2|AWA|Awba –Ofemili|AWGBU I|AWGBU II|Awka I|Awka II|Awka III|Awka IV|Awka V|Awka VI|Awka VII|Awka VIII|Awka-Etiti 1|Awka-Etiti 2|Awkuzu 1|Awkuzu 2|Awkuzu 3|Awkuzu 4|Azia|AZUIGBO|BRIDGEHEAD 1|BRIDGEHEAD 2|BRIDGEHEAD 3|EBENATOR|Ebenebe I|Ebenebe II|Ebenebe III|EKWULUMILI|Ekwuluobia I|Ekwuluobia II|Enugu out|ENUGU UMUONYIA|ENUGWU AGIDI I|ENUGWU AGIDI II|ENUGWU UKWU I|ENUGWU UKWU II|ENUGWU UKWU III|ENUGWU UKWU IV|Ezi Anam|EZIAGU|Eziagulu Out|Ezinifite I|EZINIFITE I|Ezinifite II|EZINIFITE II|EZINIFITE III|Eziowele|EZIRA|FEGGE 2|FEGGE 3|FEGGE 4|FEGGE 5|FEGGE 6|FEGGE 7|Fegge1| GRA|Ichi|Ichida I|Ichida II|Ideani|Ifite Ogwari ward 1|Ifite Ogwari ward 2|Ifitedunu1|Ifitedunu2|Igbakwuward|Igbariam| Igboukwu I|Igboukwu II|Ihembosi/Anaubahu|Ihite|IHITE|Ihiteoha|Ikenga|Inland Town 1|Inland Town 2Inland Town 3|Inland Town 4|Inland Town 5|Inland Town 6|Inland Town 7|Inland Town 8|Isiagu Ezinator|Isseke|Isuaniocha ward|ISULO|Isuofia|Iyiowa/Odekpe/Ohita|Lilu|Mbaukwu|Mbosi|Mgbakwu ward|Mkpologwu|Mmiata ward|Nando I|Nando II|Nando III|NANKA I|NANKA II|NAWFIA I|NAWFIA II|NAWFIJA|Nawgu 1|Nawgu 2|NDI OKPALAEZE|NDIKELIONWU|NDIOKOLO NDIOKPALEKE|NDIOWU|NDIUKWUENU OKPEZE|Neni I|Neni II|Nibo I|Nibo II|Nibo III|NIMO I|NIMO II|NIMO III|NIMO IV|Nise I|Nise II|NKEREHI| Nkpor 1|Nkpor 2|Nkwelle Ezunaka 1|Nkwelle Ezunaka 2|Nnewi-Ichi 1|Nnewi-Ichi 2|Nnobi 1|Nnobi 2|Nnobi 3|Nnokwa|Nri I|Nri II|Nsugbe I|Nsugbe II|Nteje 1|Nteje 2|Nteje 3|Nteje 4|Nteje 5|Nzam ward|Oba 1|Oba 2|Obeledu|Obosi|Ochuche-Umudu|ODOAKPU 1|ODOAKPU 2|ODOAKPU 3|ODOAKPU 4|ODOAKPU 5|ODOAKPU 6|ODOAKPU 7|ogbeumuonisha 1|ogbeumuonisha 2|OGBOJI|Ogbolo|Ogbunike 1|Ogbunike 2|OGBUNKA I|OGBUNKA II|Ogidi 1|Ogidi 2|Ogwu Aniocha|Ogwu Ikpele|Ojoto|Okija 1|Okija 2|Okija 3|Okija 4|Okija 5|OKO I|OKO II|Okpoko 1|Okpoko 2|Okpoko 3|Okpoko 4|Okpoko 5|Okpoko 6|Okpuno| Olumbanasa Inoma|Olumbanasa Ode|Omasi|Omor ward 1|Omor ward 2|Omor ward 3|Ora-Eri|Oraifite 1|Oraifite 2|Oraifite 3|Oraukwu|Oroma Etiti|Orsumoghu|Osamala|OSUMENYI I|OSUMENYI II|Otolo 1|Otolo 2|Otolo 3|Otuocha  II|Otuocha I|OWERRE-EZUKALA I|OWERRE-EZUKALA II|Ozubulu 1|Ozubulu 2|Ozubulu 3|Ozubulu 4|Ozubulu 5|Ubuluisiuzo|UFUMA I|UFUMA II|Uga I|Uga II|Ugbene ward|Ugbenu ward|Uke|Ukpo 1|Ukpo 2|Ukpo 3|UKPOR I|UKPOR II|UKPOR III|UKPOR IV|UKPOR V|UKPOR VI|Ukwulu I|Ukwulu II|Uli 1|Uli 2|Uli 3|Umuawulu|Umuchu 1|Umuchu II|Umudim 1|Umudim 2|Umudioka I|Umudioka II|Umueje ward|Umueri I|Umueri II|Umuerum ward|Umuewelum|Umueze Anam ward 1|Umueze Anam ward 2|Umumbo ward|Umunankwo/Mputu|Umunnachi I|Umunnachi II|Umunya 1|Umunya 2|UMUNZE I|UMUNZE II|UMUNZE III|umuoba |Umuoji|UMUOMAKU|Umuona|UNUBIUruagu 1|Uruagu 2|Uruagu 3|Urum ward|UTUH|Uzoakwa|waterside/GPO|woliwo
            `;

            let wardArray = allWards.split("|");
            //sorted wardArray
            let sortedWards = [];
            wardArray.forEach((data) => {
                data = data.toLowerCase();
                let newData = data.charAt(0).toUpperCase() + data.slice(1);
                sortedWards.push(newData);
            });
            setPollWards(sortedWards);
        }
        else if (fetchWho === "#Admin#_2") {
            setWho("Admin 2");
        }
    }, []);

    const fetchData = (e) => {
        let loader = document.querySelector("#loader5");
        loader.style.display = "flex";

        setQueryKey(e.target.id);

        if (e.target.id === "apga") {
            setWardData(e.target.id);
        }
        else {
            setWardData("");
        }

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
            navigate(`/Dashboard?${id + "=" + filterValue + "=" + queryKey}`);
        }
        else if (id === "genderAdmin") {
            navigate(`/Dashboard?${id + "=" + filterValue + "=" + queryKey}`);
        }
        else if (id === "ward") {
            navigate(`/Dashboard?${id + "=" + filterValue + "=" + queryKey}`);
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

                            {wardData === "" ?
                                <></>    
                            :
                                <select name="ward" id="ward" className='mb-2 shadow-md p-2 outline-0 border-0' onChange={handleFilter}>
                                    <option value="" hidden>By ward</option>
                                    {pollWards.map((data, dataIndex) => {
                                        return (
                                            <option key={dataIndex} value={data}>{data}</option>
                                        );
                                    })}
                                </select>
                            }

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
