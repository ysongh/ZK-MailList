import React from 'react';
import { Input } from '../components/ui/input';
import { Label } from '@radix-ui/react-label';
import { Button } from '../components/ui/button';

function Form() {
  return (
    <div>
      <Label htmlFor="text">Email</Label>
      <Input />
      <Button>Click me</Button>
    </div>
  )
}

export default Form;