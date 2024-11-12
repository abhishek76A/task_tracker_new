import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, Label, TextInput, Radio } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

type FormData = {
  firstName: string;
  lastName: string;
  gender: 'male' | 'female' | 'other';
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

const RegistrationForm: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onSubmit',           //it will validate when register button is clicked
  });

  const password = watch('password');

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log('Form Data:', data);
    localStorage.setItem("registrationData", JSON.stringify(data));
    navigate('/Welcome');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-4">
        <Label htmlFor="firstName" className="mb-2">First Name</Label>
        <TextInput
          id="firstName"
          type="text"
          {...register('firstName', { required: 'First Name is required' })}
          placeholder="First Name"
          color={errors.firstName ? 'failure' : 'default'}
        />
        {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
      </div>

      <div className="mb-4">
        <Label htmlFor="lastName" className="mb-2">Last Name</Label>
        <TextInput
          id="lastName"
          type="text"
          {...register('lastName', { required: 'Last Name is required' })}
          placeholder="Last Name"
          color={errors.lastName ? 'failure' : 'default'}
        />
        {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
      </div>

      <div className="mb-4">
        <Label>Gender</Label>
        <div className="flex gap-4 mt-2">
          <Label>
            <Radio {...register('gender', { required: 'Gender is required' })} value="male" />
            Male
          </Label>
          <Label>
            <Radio {...register('gender', { required: 'Gender is required' })} value="female" />
            Female
          </Label>
          <Label>
            <Radio {...register('gender', { required: 'Gender is required' })} value="other" />
            Other
          </Label>
        </div>
        {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>}
      </div>

      <div className="mb-4">
        <Label htmlFor="email" className="mb-2">Email</Label>
        <TextInput
          id="email"
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email address',
            },
          })}
          placeholder="example@email.com"
          color={errors.email ? 'failure' : 'default'}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      <div className="mb-4">
        <Label htmlFor="phone" className="mb-2">Phone</Label>
        <TextInput
          id="phone"
          type="tel"
          {...register('phone', {
            required: 'Phone number is required',
            pattern: {
              value: /^[0-9]{10}$/,
              message: 'Phone number must be 10 digits',
            },
          })}
          placeholder="1234567890"
          color={errors.phone ? 'failure' : 'default'}
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
      </div>

      <div className="mb-4">
        <Label htmlFor="password" className="mb-2">Password</Label>
        <TextInput
          id="password"
          type="password"
          {...register('password', {
            required: 'Password is required',
            minLength: { value: 6, message: 'Password must be at least 6 characters' },
          })}
          color={errors.password ? 'failure' : 'default'}
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
      </div>

      <div className="mb-4">
        <Label htmlFor="confirmPassword" className="mb-2">Confirm Password</Label>
        <TextInput
          id="confirmPassword"
          type="password"
          {...register('confirmPassword', {
            required: 'Confirm Password is required',
            validate: (value) => value === password || 'Passwords do not match',
          })}
          color={errors.confirmPassword ? 'failure' : 'default'}
        />
        {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
      </div>

      <Button type="submit" className="w-full bg-blue-600 text-white mt-4">
        Register
      </Button>
    </form>
  );
};

export default RegistrationForm;
