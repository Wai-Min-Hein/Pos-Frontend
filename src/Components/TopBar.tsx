import { Input } from '@mantine/core'
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi'

const TopBar = () => {
  const [value, setValue] = useState("");

  return (
    <div className="headerBar w-full h-16 flex items-center justify-start gap-8 px-4 sticky top-0  z-50 bg-white">
    <Input
      placeholder="Search "
      className="basis-1/4 !mt-0 mr-auto rounded-lg  "
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      rightSectionPointerEvents="all"
      mt="md"
      rightSection={
        <BiSearch aria-label="Sesrch" onClick={() => setValue("")} />
      }
    />

    <div className="">
      <h6>Branch : Aliean Coffee shop</h6>
    </div>
  </div>
  )
}

export default TopBar