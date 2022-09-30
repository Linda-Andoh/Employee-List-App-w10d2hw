import EmployeeList from "./EmployeeList"
import Header from "./Header"
import SearchBar from "./SearchBar"
import EmployeeListItems from "./EmployeeListItems"

const Homepage = (props) => {
    return (
    <>
        <div className="section">
            <Header />
            <SearchBar />
            <EmployeeList />
        </div>
    </>
  )
}

export default Homepage;