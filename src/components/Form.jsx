import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { CATEGORIES } from "../constants"
import useNews from "../hooks/useNews"

const Form = () => {
  const { category, handleChangeCategory } = useNews()

  return (
    <form>
      <FormControl fullWidth>
        <InputLabel
          htmlFor="category"
        >
          Category
        </InputLabel>
        <Select
          id="category"
          aria-describedby="category"
          value={category}
          onChange={handleChangeCategory}
        >
          {CATEGORIES.map(category => (
            <MenuItem key={category.value} value={category.value}>{category.label}</MenuItem>
          ))}
        </Select>

      </FormControl>
    </form>
  )
}

export default Form
