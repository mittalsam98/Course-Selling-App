import { useState } from 'react';
import Input from '../coreComponents/Input';
import { ReactComponent as Close } from '../images/close.svg';
import { ReactComponent as Add } from '../images/add.svg';
import { createCourse } from '../coreComponents/helper/apiCalls';

function Create() {
  const [inputs, setInputs] = useState([]); // State to store input values
  const [loading, setLoading] = useState(false); // State to store input values
  const [values, setValues] = useState({
    cName: '',
    description: '',
    price: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [id]: value
    }));
  };
  const handleInputChange = (index, value) => {
    const updatedInputs = [...inputs];
    updatedInputs[index] = value;
    setInputs(updatedInputs);
  };

  const handleAddInput = () => {
    setInputs([...inputs, '']);
  };

  const handleRemoveInput = (index) => {
    const updatedInputs = [...inputs];
    updatedInputs.splice(index, 1);
    setInputs(updatedInputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let course = {
      name: values.cName,
      description: values.description,
      price: values.price,
      modules: inputs
    };
    createCourse(course)
      .then((response) => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  return (
    <div className='flex text-left mx-auto flex-col space-y-2 w-2/5'>
      <div className='text-3xl py-5 font-semibold'>Add Course</div>
      <form onSubmit={handleSubmit}>
        <Input
          title='Course Name*'
          handleChange={handleChange}
          id='cName'
          type='text'
          value={values.cName}
          placeholder='Enter your course title'
        />
        <Input
          title='Description of Course*'
          handleChange={handleChange}
          id='description'
          type='description'
          value={values.description}
          placeholder='Brief your course'
        />
        <Input
          title='Price*'
          handleChange={handleChange}
          id='price'
          type='number'
          value={values.price}
          placeholder='Price of the course'
        />
        <div className='text-2xl py-5 font-semibold'>Add Curriculum*</div>
        {inputs.length === 0 && (
          <>
            <button
              type='button'
              onClick={handleAddInput}
              className='flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full hover:bg-blue-300'
            >
              <span>
                <Add />
              </span>
            </button>
          </>
        )}
        {inputs.map((input, index) => (
          <div key={index} className='flex items-center justify-between w-full'>
            <Input
              title={`Lecture ${index + 1}`}
              handleChange={(e) => handleInputChange(index, e.target.value)}
              id='content'
              value={input}
              placeholder='Add content of the course'
            />
            {index === inputs.length - 1 && (
              <button
                type='button'
                onClick={handleAddInput}
                className='flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full hover:bg-blue-300'
              >
                <Add />
              </button>
            )}
            {index !== inputs.length - 1 && (
              <button
                type='button'
                onClick={() => handleRemoveInput(index)}
                className='flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full hover:bg-blue-300'
              >
                <Close />
              </button>
            )}
          </div>
        ))}
        <div className='flex justify-end'>
          <button
            type='submit'
            disabled={
              loading || inputs.length <= 0 || !values.cName || !values.description || !values.price
            }
            class='bg-blue-600 py-2 px-7 mt-5 w-full mx-auto text-white rounded-3xl hover:bg-blue-700 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-gray-200 '
          >
            Create Course
          </button>
        </div>
      </form>
    </div>
  );
}

export default Create;
