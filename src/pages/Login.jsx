// import React, { useEffect, useRef, useState } from 'react';
// import gsap from 'gsap';

// const Login = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     confirmPassword: '',
//     firstName: '',
//     lastName: ''
//   });

//   const formRef = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(formRef.current,
//       { opacity: 0, scale: 0.9 },
//       { opacity: 1, scale: 1, duration: 0.8 }
//     );
//   }, [isLogin]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isLogin) {
//       alert('Login successful!');
//     } else {
//       if (formData.password !== formData.confirmPassword) {
//         alert('Passwords do not match!');
//         return;
//       }
//       alert('Account created successfully!');
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <div style={{paddingTop: '100px'}}>
//       <div className="container py-5">
//         <div className="row justify-content-center">
//           <div className="col-md-6">
//             <div ref={formRef} className="card card-luxury">
//               <div className="card-body">
//                 <h3 className="text-center luxury-text mb-4">
//                   {isLogin ? 'Welcome Back' : 'Create Account'}
//                 </h3>
                
//                 <form onSubmit={handleSubmit}>
//                   {!isLogin && (
//                     <div className="row mb-3">
//                       <div className="col-md-6">
//                         <label htmlFor="firstName" className="form-label">First Name</label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           id="firstName"
//                           name="firstName"
//                           value={formData.firstName}
//                           onChange={handleChange}
//                           required
//                         />
//                       </div>
//                       <div className="col-md-6">
//                         <label htmlFor="lastName" className="form-label">Last Name</label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           id="lastName"
//                           name="lastName"
//                           value={formData.lastName}
//                           onChange={handleChange}
//                           required
//                         />
//                       </div>
//                     </div>
//                   )}

//                   <div className="mb-3">
//                     <label htmlFor="email" className="form-label">Email</label>
//                     <input
//                       type="email"
//                       className="form-control"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
                  
//                   <div className="mb-3">
//                     <label htmlFor="password" className="form-label">Password</label>
//                     <input
//                       type="password"
//                       className="form-control"
//                       id="password"
//                       name="password"
//                       value={formData.password}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>

//                   {!isLogin && (
//                     <div className="mb-3">
//                       <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
//                       <input
//                         type="password"
//                         className="form-control"
//                         id="confirmPassword"
//                         name="confirmPassword"
//                         value={formData.confirmPassword}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                   )}

//                   <button type="submit" className="btn btn-luxury w-100 mb-3">
//                     {isLogin ? 'Login' : 'Create Account'}
//                   </button>
//                 </form>

//                 <div className="text-center">
//                   <button
//                     className="btn btn-link text-decoration-none"
//                     onClick={() => setIsLogin(!isLogin)}
//                   >
//                     {isLogin ? 'Need an account? Sign up' : 'Already have an account? Login'}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
  });
  const [message, setMessage] = useState('');
  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(formRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.8 }
    );
  }, [isLogin]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    if (!isLogin && formData.password !== formData.confirmPassword) {
      setMessage("❌ Passwords do not match");
      return;
    }

    const url = isLogin
      ? 'https://jewel-web-2-backend.onrender.com/api/users/login'
      : 'https://jewel-web-2-backend.onrender.com/api/users/register';

    const payload = isLogin
      ? {
          email: formData.email,
          password: formData.password
        }
      : {
          username: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          password: formData.password
        };

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (res.ok) {
        if (isLogin) {
          localStorage.setItem('token', data.token);
          setMessage("✅ Logged in successfully!");
        } else {
          setMessage("✅ Registered successfully!");
          setIsLogin(true); // switch to login view
        }
      } else {
        setMessage(`❌ ${data.message || 'Something went wrong'}`);
      }
    } catch (error) {
      setMessage("❌ Server error");
    }
  };

  return (
    <div style={{ paddingTop: '100px' }}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div ref={formRef} className="card card-luxury">
              <div className="card-body">
                <h3 className="text-center luxury-text mb-4">
                  {isLogin ? 'Welcome Back' : 'Create Account'}
                </h3>

                {message && (
                  <div className="alert alert-info text-center">{message}</div>
                )}

                <form onSubmit={handleSubmit}>
                  {!isLogin && (
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label className="form-label">First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  )}

                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {!isLogin && (
                    <div className="mb-3">
                      <label className="form-label">Confirm Password</label>
                      <input
                        type="password"
                        className="form-control"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  )}

                  <button type="submit" className="btn btn-luxury w-100 mb-3">
                    {isLogin ? 'Login' : 'Create Account'}
                  </button>
                </form>

                <div className="text-center">
                  <button
                    className="btn btn-link text-decoration-none"
                    onClick={() => setIsLogin(!isLogin)}
                  >
                    {isLogin
                      ? 'Need an account? Sign up'
                      : 'Already have an account? Login'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
