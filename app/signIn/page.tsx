"use client";
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { Button, Link, Checkbox } from "@mui/material";
import { VisibilityOff } from '@mui/icons-material';
import Image from "next/image";

const LoginPage = () => {
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [passwordValue, setPasswordValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const router = useRouter();

    const signInHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push("/register"); 
    };

    return (
        <div style={{
            backgroundImage: "url('/images/Frame.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            width: "100vw",
        }}>
            <div style={{
                marginTop: "39.29px",
                color: "#025964",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <div style={{ marginRight: "8px", width: "142px", height: "27.43px" }}>
                <Image 
                        src="/images/logo.png" 
                        alt="logo" 
                        width={100}  
                        height={100}  
                        layout="intrinsic" 
                    />                
                    </div>
            </div>
            <div style={{
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                boxSizing: "border-box",
            }}>
                <div style={{
                    backgroundColor: "white",
                    width: "412px",
                    padding: "30px",
                    borderRadius: "15px",
                    maxWidth: "100%",
                    boxSizing: "border-box",
                }}>
                    <form onSubmit={signInHandler}>
                        <div>
                            <h1 style={{
                                color: "#031B1B",
                                fontSize: "22px",
                                fontWeight: 500,
                            }}>Sign In</h1>
                            <p style={{
                                color: "#798888",
                                height: "14",
                                fontSize: "12px",
                                fontWeight: 500,
                            }}>Welcome back, please enter your details</p>
                            <div style={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginTop: "22px",
                                gap: "12px",
                            }}>
                                <div onFocus={() => setEmailFocused(true)} onBlur={() => setEmailFocused(false)} style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "100%",
                                    borderRadius: "12px",
                                    padding: "18px",
                                    border: `2px solid ${emailFocused ? '#00D47E' : '#E5EBEB'}`,
                                }}>
                                    <div style={{ marginRight: "14px", width: "18px", height: "18px", justifyContent: "center", alignItems: "center" }}>
                                <Image 
                                src="/images/email.png" 
                                alt="emailICon" 
                                width={100}  
                                height={100}  
                                layout="intrinsic" 
                                 />                
                                </div>
                                    <div style={{
                                        color: "#D9E2E2",
                                        fontSize: "22px",
                                    }}>|</div>
                                    <div style={{ position: 'relative', width: '100%' }}>
                                        <input
                                            type="email"
                                            id="email"
                                            value={emailValue}
                                            onChange={(e) => setEmailValue(e.target.value)}
                                            autoComplete="off"
                                            style={{
                                                marginLeft: '14px',
                                                height: '31px',
                                                fontSize: '12px',
                                                fontWeight: 500,
                                                border: 'none',
                                                outline: 'none',
                                                width: '100%',
                                                paddingTop: '10px',
                                                alignItems: 'center',
                                            }} />
                                        <label htmlFor="email" style={{
                                            alignItems: "center",
                                            position: 'absolute',
                                            top: emailFocused || emailValue ? '-5px' : '25%',
                                            left: '14px',
                                            fontWeight: 500,
                                            fontSize: emailFocused || emailValue ? '10px' : '12px',
                                            color: "#A2ACAC",
                                            transition: '0.2s ease all',
                                            pointerEvents: 'none',
                                        }}>
                                            Email address
                                        </label>
                                    </div>
                                </div>
                                <div onFocus={() => setPasswordFocused(true)} onBlur={() => setPasswordFocused(false)} style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "100%",
                                    borderRadius: "12px",
                                    padding: "18px",
                                    border: `2px solid ${passwordFocused ? '#00D47E' : '#E5EBEB'}`,
                                }}>
                                <div style={{ marginRight: "14px", width: "18px", height: "18px", justifyContent: "center", alignItems: "center" }}>
                                <Image 
                                src="/images/password.png" 
                                alt="keyIcon" 
                                width={100}  
                                height={100}  
                                layout="intrinsic" 
                                    />                
                                </div>
                                    <div style={{
                                        color: "#D9E2E2",
                                        fontSize: "22px",
                                    }}>|</div>
                                    <div style={{ position: 'relative', width: '100%' }}>
                                        <input
                                            type={passwordVisible ? 'text' : 'password'}
                                            id="password"
                                            value={passwordValue}
                                            onChange={(e) => setPasswordValue(e.target.value)}
                                            style={{
                                                marginLeft: '14px',
                                                height: '31px',
                                                fontSize: '12px',
                                                fontWeight: 500,
                                                border: 'none',
                                                outline: 'none',
                                                width: '240px',
                                                paddingTop: '10px',
                                                alignItems: 'center',
                                            }} />
                                        <label htmlFor="password" style={{
                                            alignItems: "center",
                                            position: 'absolute',
                                            top: passwordFocused || passwordValue ? '-5px' : '25%',
                                            left: '14px',
                                            fontWeight: 500,
                                            fontSize: passwordFocused || passwordValue ? '10px' : '12px',
                                            color: "#A2ACAC",
                                            transition: '0.2s ease all',
                                            pointerEvents: 'none',
                                        }}>
                                            Password
                                        </label>
                                    </div>
                                    <div onClick={() => setPasswordVisible(!passwordVisible)} style={{
                                        cursor: 'pointer',
                                        zIndex: "10",
                                        color: "#9ABDC1",
                                    }}>
                                        {passwordVisible ? (
                                         <div style={{ width: "18px", height: "18px", justifyContent: "center", alignItems: "center" }}>
                                         <Image 
                                         src="/images/visible.png" 
                                         alt="visibleIcon" 
                                         width={100}  
                                         height={100}  
                                         layout="intrinsic" 
                                          />                
                                         </div>   
                                        ) : (
                                            <VisibilityOff style={{ width: '18px', height: '18px' }} />
                                        )}
                                    </div>
                                </div>
                                <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                    <div>
                                    <Checkbox
                                    id="agree"
                                    sx={{ marginRight: "8px", width: "16px", height: "16px", borderRadius: "4px", '&.Mui-checked': { color: '#025964', }, '&.MuiCheckbox-root': { border: "1px solid #E5EBEB", }, }}/>
                                    <label
                                        htmlFor="agree"
                                        style={{
                                            fontSize: "12px",
                                            fontWeight: 400,
                                            color: "#798888",
                                        }}>Remember me</label>
                                    </div>
                                    <div style={{color: "#025964", fontSize: "12px", fontWeight: 400}}>Forgot Password?</div>
                                </div>
                                <Button
                                    variant="contained"
                                    type="submit"
                                    sx={{
                                        marginTop: "10px",
                                        width: "100%",
                                        fontSize: "14px",
                                        fontWeight: 500,
                                        color: "#00D47E",
                                        borderRadius: "15px",
                                        backgroundColor: "#025964",
                                        padding: "16px",
                                        textTransform: "capitalize",
                                    }}>
                                    Sign In
                                </Button>
                            </div>
                        </div>
                    </form>

                    <div style={{
                        marginTop: "22px",
                        display: "flex",
                        width: "100%",
                        justifyContent: "center",
                    }}>
                        <p style={{
                            color: "#798888",
                            fontWeight: 500,
                            fontSize: "12px",
                        }}>
                            Don&apos;t have an account?{" "}
                            <Link href="/signUp" style={{
                                color: "#00D47E",
                                textDecoration: "none",
                            }}>
                                Register now
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
