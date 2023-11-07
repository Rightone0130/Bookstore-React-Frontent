import { 
  Box, 
  FormControl, 
  FormLabel, 
  FormHelperText, 
  Input, 
  Textarea, 
  Button, 
} from '@chakra-ui/react'
import { Form, redirect } from 'react-router-dom'

export default function Create() {

  return (
    <Box maxW="480px">
      <Form method="post" action="/create">
        <FormControl isRequired mb="40px">
          <FormLabel>Book name:</FormLabel>
          <Input type="text" name="title" />
          <FormHelperText>Enter a descriptive task name.</FormHelperText>
        </FormControl>

        <FormControl mb="40px">
          <FormLabel>Book description:</FormLabel>
          <Textarea 
            placeholder="Enter a detailed description for your task..." 
            name="description"
          />
        </FormControl>
        <Button type="submit">submit</Button>
      </Form>
    </Box>
  )
}


export const createAction = async () => {
  // const data = await request.formData()

  // const task = {
  //   title: data.get('title'),
  //   description: data.get('description'),
  //   isPriority: data.get('isPriority') === ''
  // }

  // console.log(task)

  // return redirect('/')
}

