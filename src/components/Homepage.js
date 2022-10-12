import Header from "./Header"
import SearchBar from "./SearchBar"
import EmployeeList from "./EmployeeList"
import EmployeePage from "./EmployeePage"

const Homepage = (props) => {
    return (
    <>
        <div class="section" id="left">
            <Header />
            <SearchBar />
            <EmployeeList />
        </div>
         <div class="section" id="right">
            <EmployeePage />
         </div>
    </>
  )
}

export default Homepage;