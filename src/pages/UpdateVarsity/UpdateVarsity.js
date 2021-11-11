import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateVarsity = () => {
  const { id } = useParams()

  const [varsity, setVarsity] = useState({})

  useEffect(() => {

  }, [id])

  return (
    <div className="container mx-auto">
      <h1 className="text-lg">{id}</h1>
    </div>
  );
};

export default UpdateVarsity;