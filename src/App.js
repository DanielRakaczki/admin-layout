import {useState} from "react";
import SectionOrder from "./components/SectionOrder";
import ProjectCardRow from "./components/ProjectCardRow";
import ProjectCard from "./components/ProjectCard";

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
    console.log(dataList.length)

    function changeLayout() {
    layout !== 'list' && setLayout('list')
    layout !== 'grid' && setLayout('grid')
  }

    return (
    <main>
      <nav className="nav">
        <h1 className="nav-title">Warehouse</h1>
        <ul className="nav-ul">
          <li><i className="fa-solid fa-house icon"></i><p>Dashboard</p></li>
          <li><i className="fa-solid fa-gauge icon"></i><p>Search</p></li>
          <li><i className="fa-solid fa-comment icon"></i><p>My Listings</p></li>
          <li><i className="fa-solid fa-briefcase icon"></i><p>My Projects</p></li>
          <div className="separator"></div>
          <li><i className="fa-solid fa-cart-shopping icon"></i><p>Inventory</p></li>
          <div className="separator"></div>
          <li><i className="fa-solid fa-prescription-bottle-medical icon"></i><p>Invoices</p></li>
          <li><i className="fa-solid fa-paint-roller icon"></i><p>Contract Hub</p></li>
          <li><i className="fa-solid fa-globe icon"></i><p>Help/FAQs</p></li>
        </ul>
      </nav>
          <section className="section">
            <div className="section-title">
              <h1 className="section-title-title">MY PROJECTS</h1>
              <select className="section-title-select">
                <option value="All Warehouses">All Warehouses</option>
              </select>
            </div>
              <div className="section-card">
                  <div className="section-card-short">
                      <div className="short-wrapper">
                          <a href="#" className="short">All (20)</a>
                          <a href="#" className="short">Pending (12)</a>
                          <a href="#" className="short">Negotiating (5)</a>
                          <a href="#" className="short">Cancelled (3)</a>
                      </div>
                      <div className="short-wrapper">
                          <div className="short-icon"><i className="fa fa-search"></i></div>
                          <i className={'fas fa-list short-icon ' + (layout === 'list' ? 'short-icon-active' : '')} onClick={changeLayout}></i>
                          <i className={'fas fa-th short-icon ' + (layout === 'grid' ? 'short-icon-active' : '')} onClick={changeLayout}></i>
                      </div>
                  </div>
                  <div className={'section-card-wrapper ' + (layout === 'list' ? 'list' : '')}>
                      {layout === 'list' ? <SectionOrder/> : <></>}
                      {
                          (dataList.length > 0) ? dataList.map(data => (
                              layout === 'grid' ? <ProjectCard data={data} key={data.id} /> : <ProjectCardRow data={data} key={data.id} />
                          )): <h1>There is no projects</h1>
                      }
                </div>
              </div>
          </section>
    </main>
    );
}

export default App;
