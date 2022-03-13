import {useState} from "react";
import SectionOrder from "./components/SectionOrder";
import ProjectCardRow from "./components/ProjectCardRow";
import ProjectCard from "./components/ProjectCard";
import Logo from "./assets/Logo";
import Forklift from "./assets/Forklift";

function App() {
  const [layout, setLayout] = useState('grid');
  const data = {
      id: 907655,
      name: 'Steve Waugh',
      country: 'GB',
      address: 'Corner Brook 1323',
      longAddress: 'Corner Brook, Newfoundland',
      addedTime: '5 July 2019',
      status: 'Pending',
      startTime: '10 Oct 2019',
      endTime: '5 Nov 2019'
  }
  const dataList = [data, data, data, data, data, data, data, data, data, data, data, data, data, data, data, data]

  function changeLayout(e) {
    e.target.id === 'list-btn' && setLayout('list')
    e.target.id === 'grid-btn' && setLayout('grid')
  }

    return (
    <main>
      <nav className="nav">
        <div className="nav-title">
          <Logo className="logo" />
          <div className="nav-title-sub">
            <Forklift className="forklift" stroke="currentColor" strokeWidth={0.5} width=""/>
            <h1>WAREHOWZ</h1>
          </div>
        </div>
        <ul className="nav-ul">
          <li><i className="fa-solid fa-border-all icon"></i><p>Dashboard</p></li>
          <li><i className="fa-solid fa-magnifying-glass icon"></i><p>Search</p></li>
          <li><i className="fa-solid fa-list icon"></i><p>My Listings</p></li>
          <li><i className="fa-solid fa-briefcase icon"></i><p>My Projects</p></li>
          <div className="separator"></div>
          <li><i className="fa-solid fa-box-open icon"></i><p>Inventory</p></li>
          <div className="separator"></div>
          <li><i className="fa-solid fa-file-invoice-dollar icon"></i><p>Invoices</p></li>
          <li><i className="fa-solid fa-file-signature icon"></i><p>Contract Hub</p></li>
          <li><i className="fa-solid fa-circle-question icon"></i><p>Help/FAQs</p></li>
        </ul>
      </nav>
          <section className="section-title-container">
            <div className="section-title">
              <h1 className="section-title-title">MY PROJECTS</h1>
              <select className="section-title-select">
                <option value="All Warehouses">All Warehouses</option>
              </select>
            </div>
              <div className="section-card-container">
                  <div className="section-card-short">
                      <div className="short-wrapper">
                          <a href="#" className="short">All (20)</a>
                          <a href="#" className="short">Pending (12)</a>
                          <a href="#" className="short">Negotiating (5)</a>
                          <a href="#" className="short">Cancelled (3)</a>
                      </div>
                      <div className="short-wrapper">
                          <div className="short-icon"><i className="fa fa-search"></i></div>
                          <i className={'fas fa-list short-icon ' + (layout === 'list' ? 'short-icon-active' : '')}
                             id="list-btn"
                             onClick={changeLayout}>
                          </i>
                          <i className={'fas fa-th short-icon ' + (layout === 'grid' ? 'short-icon-active' : '')}
                             id="grid-btn"
                             onClick={changeLayout}>
                          </i>
                      </div>
                  </div>
                  <div className={'section-card-wrapper ' + (layout === 'list' ? 'list' : '')}>
                      {layout === 'list' ? <SectionOrder/> : <></>}
                      {
                          (dataList.length > 0) ? dataList.map((data, index) => (
                              layout === 'grid' ? (
                                <ProjectCard data={data} key={index} index={index}/>
                              ) : (
                                <ProjectCardRow data={data} key={index} index={index}/>
                              )
                          )): <h1>There is no projects</h1>
                      }
                </div>
              </div>
          </section>
    </main>
    );
}

export default App;
