"use client";
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { Button, Link, Checkbox } from "@mui/material";
import Image from "next/image";

const LoginPage = () => {
    const [companyNameFocused, setCompanyNameFocused] = useState(false);
    const [companyNameValue, setCompanyNameValue] = useState('');
    const [companyEmailFocused, setCompanyEmailFocused] = useState(false);
    const [companyEmailValue, setCompanyEmailValue] = useState('');
    const [phoneNumberFocused, setPhoneNumberFocused] = useState(false);
    const [phoneNumberValue, setPhoneNumberValue] = useState('');
    const [checked, setChecked] = useState(false);
    const router = useRouter();

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked); 

    };

    const handleSignUp =(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            router.push("/signUp");
    }

    return (
        <div style={{
            backgroundImage: "url('/Frame.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
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
                <div style={{ marginRight: "8px", width: "27.43px", height: "27.43px" }}>
                    <Image 
                        src="/logo.png" 
                        alt="logo" 
                        width={100}  
                        height={100}  
                        layout="intrinsic" 
                    />                
                </div>
                <div style={{ fontSize: "24px", fontWeight: "bold"}}>Sequence</div>
            </div>
        <div
            style={{
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                boxSizing: "border-box",
            }}>
            <div
                style={{
                    backgroundColor: "white",
                    width: "412px",
                    padding: "30px",
                    borderRadius: "15px",
                    maxWidth: "100%",
                    boxSizing: "border-box",
                }}>
                <form onSubmit={handleSignUp}>
                    <div>
                        <div>
                            <h1
                                style={{
                                    color: "#031B1B",
                                    fontSize: "22px",
                                    fontWeight: 500,
                                }}>
                                Register your company
                            </h1>
                            <p
                                style={{
                                    color: "#798888",
                                    height: "14",
                                    fontSize: "12px",
                                    fontWeight: 500,
                                }}>
                                 Enter your company details below to create your account
                            </p>
                        </div>
                        <div
                            style={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginTop: "22px",
                                gap: "12px",
                            }}>
                            <div
                                onFocus={() => setCompanyNameFocused(true)}
                                onBlur={() => setCompanyNameFocused(false)}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    width: "100%",
                                    borderRadius: "12px",
                                    padding: "18px",
                                    border: `2px solid ${companyNameFocused ? '#00D47E' : '#E5EBEB'}`,
                                }}>
                                <div style={{ marginRight: "8px", width: "18px", height: "18px", justifyContent: "center", alignItems: "center" }}>
                                    <Image 
                                        src="/company.png" 
                                        alt="companyIcon" 
                                        width={100}  
                                        height={100}  
                                        layout="intrinsic" 
                                     />                
                                </div>
                                <div
                                    style={{
                                        color: "#D9E2E2",
                                        fontSize: "22px",
                                    }}>|</div>
                                <div style={{ position: 'relative', width: '100%' }}>
                                    <input
                                        type="text"
                                        id="companyName"
                                        value={companyNameValue}
                                        onChange={(e) => setCompanyNameValue(e.target.value)}
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
                                    <label
                                        htmlFor="companyName"
                                        style={{
                                            alignItems: "center",
                                            position: 'absolute',
                                            top: companyNameFocused || companyNameValue ? '-5px' : '25%',
                                            left: '14px',
                                            fontWeight: 500,
                                            fontSize: '12px',
                                            color: "#A2ACAC",
                                            transition: '0.2s ease all',
                                            pointerEvents: 'none',
                                        }}>
                                        Company name
                                    </label>
                                </div>
                            </div>
                            <div
                                onFocus={() => setCompanyEmailFocused(true)}
                                onBlur={() => setCompanyEmailFocused(false)}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    width: "100%",
                                    borderRadius: "12px",
                                    padding: "18px",
                                    border: `2px solid ${companyEmailFocused ? '#00D47E' : '#E5EBEB'}`,
                                }}>
                                <div style={{ marginRight: "8px", width: "18px", height: "18px", justifyContent: "center", alignItems: "center" }}>
                                    <Image 
                                        src="/email.png" 
                                        alt="emailIcon" 
                                        width={100}  
                                        height={100}  
                                        layout="intrinsic" 
                                     />                
                                </div>
                                <div
                                    style={{
                                        color: "#D9E2E2",
                                        fontSize: "22px",
                                    }}>|</div>
                                <div style={{ position: 'relative', width: '100%' }}>
                                    <input
                                        type="email"
                                        id="companyEmail"
                                        value={companyEmailValue}
                                        onChange={(e) => setCompanyEmailValue(e.target.value)}
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
                                    <label
                                        htmlFor="companyEmail"
                                        style={{
                                            alignItems: "center",
                                            position: 'absolute',
                                            top: companyEmailFocused || companyEmailValue ? '-5px' : '25%',
                                            left: '14px',
                                            fontWeight: 500,
                                            fontSize: '12px',
                                            color: "#A2ACAC",
                                            transition: '0.2s ease all',
                                            pointerEvents: 'none',
                                        }}>
                                        Company email
                                    </label>
                                </div>
                            </div>
                            <div
                                onFocus={() => setPhoneNumberFocused(true)}
                                onBlur={() => setPhoneNumberFocused(false)}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    width: "100%",
                                    borderRadius: "12px",
                                    padding: "18px",
                                    border: `2px solid ${phoneNumberFocused ? '#00D47E' : '#E5EBEB'}`,
                                }}>
                                <div style={{ marginRight: "8px", width: "18px", height: "18px", justifyContent: "center", alignItems: "center" }}>
                                    <Image 
                                        src="/phone.png" 
                                        alt="phoneIcon" 
                                        width={100}  
                                        height={100}  
                                        layout="intrinsic" 
                                     />                
                                </div>
                                <div
                                    style={{
                                        color: "#D9E2E2",
                                        fontSize: "22px",
                                    }}>|</div>
                                <div style={{ position: 'relative', width: '100%' }}>
                                    <input
                                        type="tel"
                                        id="phoneNumber"
                                        value={phoneNumberValue}
                                        onChange={(e) => setPhoneNumberValue(e.target.value)}
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
                                    <label
                                        htmlFor="phoneNumber"
                                        style={{
                                            alignItems: "center",
                                            position: 'absolute',
                                            top: phoneNumberFocused || phoneNumberValue ? '-5px' : '25%',
                                            left: '14px',
                                            fontWeight: 500,
                                            fontSize: '12px',
                                            color: "#A2ACAC",
                                            transition: '0.2s ease all',
                                            pointerEvents: 'none',
                                        }}>
                                        Phone number
                                    </label>
                                </div>
                            </div>
                                <div style={{ display: "flex", alignItems: "center", width: "100%"  }}>
                                        <Checkbox
                                        id="agree"
                                        onChange={handleCheckboxChange}
                                        sx={{ marginRight: "8px", width: "16px", height: "16px", borderRadius: "4px", '&.Mui-checked': { color: '#025964', }, '&.MuiCheckbox-root': { border: "1px solid #E5EBEB", }, }}/>
                                    <label
                                        htmlFor="agree"
                                        style={{
                                            fontSize: "12px",
                                            fontWeight: 400,
                                            color: "#798888",
                                        }}>
                                        <p
                        style={{
                            color: "#798888",
                            fontWeight: 500,
                            fontSize: "12px",
                        }}>
                            I agree to? {""}
                            <Link
                            href="/signUp"
                            style={{
                                color: "#025964",
                                textDecorationColor: "#025964",
                            }}>
                            terms of services
                        </Link>
                        {""} & {""}
                        <Link
                            href="/signUp"
                            style={{
                                color: "#025964",
                                textDecorationColor: "#025964",
                            }}>
                            Privacy Policy
                        </Link>
                    </p>
                                    </label>
                            </div>
                            <Button
                                variant="contained"
                                type="submit"
                                disabled={!checked}
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
                                Sign Up
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
};

export default LoginPage;



