import { teamData } from "../common/helper";
const OurTeam = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-center fw-semibold lh-base">Our Team</h1>
        <p className="text-center fw-normal lh-base txt_offBlack mw_934 mx-auto pb-4">
          Lorem ipsum dolor sit amet consectetur. Velit pulvinar libero
          porttitor quam sed aliquet. Sodales vulputate elementum arcu donec.
          Feugiat nibh ullamcorper egestas lectus risus ornare ullamcorper
          fames. Cursus libero nec facilisis
        </p>
        <div className="row pb-5">
          {teamData.map((teamData, i) => {
            return (
              <div
                className={`col-lg-3 col-md-4 col-sm-6 h-100 ${
                  i === 0 ? "" : ""
                }`}
                key={i}
              >
                <div
                  className={`team_card  d-flex flex-column align-items-center pt-3 px-2 pb-3 ${teamData.space}`}
                >
                  <img className="pb-3" src={teamData.img} alt="team-member" />
                  <h3 className="my-1">{teamData.bigHeading}</h3>
                  <h4 className="pb-2 mb-1 textPurple">
                    {teamData.smallHeading}
                  </h4>
                  <p className="txt_offBlack lh-base fw-normal text-center">
                    {teamData.para}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default OurTeam;
