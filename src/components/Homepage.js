import Header from "./Header"
import SearchBar from "./SearchBar"
import EmployeeList from "./EmployeeList"
import EmployeePage from "./EmployeePage"
// import EmployeeListItems from "./EmployeeListItems"

const Homepage = () => {
    return (
    <>
      <div id="homeContainer">
        <div class="section" id="leftSide">
            <Header />
            <SearchBar />
            <EmployeeList />
            {/* <EmployeeListItems /> */}
        </div>
         <div class="section" id="rightSide">
            <EmployeePage />
         </div>
      </div>
    </>
  )
}

export default Homepage;