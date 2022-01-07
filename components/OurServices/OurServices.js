import React from 'react';
import '../../App.css';
import '../style/style.css';


const OurServices = () => {

    // services 
    const services = [
        {
            "name": "EXPERIENCE",
            "icon": "fas fa-ship"
        },
        {
            "name": "EXPERTISE",
            "icon": "fas fa-glasses"
        },
        {
            "name": "SUPPORT",
            "icon": "far fa-life-ring"
        },
        {
            "name": "CONSULTATION",
            "icon": "far fa-comment-dots"
        }
    ]


    return (

        <>

            <h6 className='text-center text-warning' style={{ fontFamily: "Leckerli One,cursive" }}>Welcome there !</h6>
            <h1 style={{ color: "#06175C", fontSize: ' 3.333em', fontFamily: 'Exo,sans-serif', fontWeight: 700, textAlign: 'center' }}>COMPLETE AQUARIUM <br /> SERVICES</h1>

            <article className='d-flex mt-4 mb-4 justify-content-center'>
                <img src="https://i.ibb.co/xG2f7zv/Screenshot-1.png" alt="" />
            </article>

            <p style={{ color: '#626085', fontFamily: "Roboto Slab,serif", textAlign: 'center', fontSize: 17, marginTop: 15 }}>Aqualots is a professional aquarium maintenance and service company <br /> unlike any other. More than just an aquarium cleaning service, Aqualots <br /> offers a full line of professional aquarium services</p>

            {/* svg  */}
            <article >
                <svg style={{ position: "absolute", zIndex: -99, marginTop: -60 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E9F2FF" fill-opacity="1" d="M0,160L9.2,144C18.5,128,37,96,55,90.7C73.8,85,92,107,111,112C129.2,117,148,107,166,112C184.6,117,203,139,222,149.3C240,160,258,160,277,154.7C295.4,149,314,139,332,122.7C350.8,107,369,85,388,80C406.2,75,425,85,443,90.7C461.5,96,480,96,498,96C516.9,96,535,96,554,90.7C572.3,85,591,75,609,112C627.7,149,646,235,665,229.3C683.1,224,702,128,720,122.7C738.5,117,757,203,775,240C793.8,277,812,267,831,234.7C849.2,203,868,149,886,149.3C904.6,149,923,203,942,224C960,245,978,235,997,218.7C1015.4,203,1034,181,1052,192C1070.8,203,1089,245,1108,229.3C1126.2,213,1145,139,1163,96C1181.5,53,1200,43,1218,69.3C1236.9,96,1255,160,1274,170.7C1292.3,181,1311,139,1329,112C1347.7,85,1366,75,1385,85.3C1403.1,96,1422,128,1431,144L1440,160L1440,320L1430.8,320C1421.5,320,1403,320,1385,320C1366.2,320,1348,320,1329,320C1310.8,320,1292,320,1274,320C1255.4,320,1237,320,1218,320C1200,320,1182,320,1163,320C1144.6,320,1126,320,1108,320C1089.2,320,1071,320,1052,320C1033.8,320,1015,320,997,320C978.5,320,960,320,942,320C923.1,320,905,320,886,320C867.7,320,849,320,831,320C812.3,320,794,320,775,320C756.9,320,738,320,720,320C701.5,320,683,320,665,320C646.2,320,628,320,609,320C590.8,320,572,320,554,320C535.4,320,517,320,498,320C480,320,462,320,443,320C424.6,320,406,320,388,320C369.2,320,351,320,332,320C313.8,320,295,320,277,320C258.5,320,240,320,222,320C203.1,320,185,320,166,320C147.7,320,129,320,111,320C92.3,320,74,320,55,320C36.9,320,18,320,9,320L0,320Z"></path></svg>
            </article>

            <article className='d-flex justify-content-center' style={{ columnGap: "10%" }}>
                {
                    services.map(service => <article className='service'>

                        <aside className='service-icon'>
                            <i className={service.icon}></i>
                        </aside>

                        <h6 className='text-center fw-bold mt-2' style={{ color: "#06175C" }}>
                            {service.name}
                        </h6>

                    </article>
                    )
                }
            </article>



        </ >
    );
};

export default OurServices;