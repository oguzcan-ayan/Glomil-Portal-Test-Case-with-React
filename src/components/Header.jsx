import React from 'react';
import ResponsiveHeader from './ResponsiveHeader';
import { NavLink } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { IoArrowUp } from "react-icons/io5";

function Header() {

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <div className='portal-header'>
                <NavLink to="/">
                    <img className='glomil-logo' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVQAAABsCAMAAAACErrzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAWlBMVEUAAAAbIBseHhsdHh0dHRwdHxwcHhwgICAcHBweHhwdHR0gICAeHhwdHhwdHxwdHhsdHR0cIBweHhsdHhsdHhwdHh0dHRwdHR0cHhwcHhwdHhweHhwdHhz////vdu0DAAAAHHRSTlMAMF+Pv69/ID9vTxDP78CfYEBw3/Cg0FDgkLCAVzL84AAAAAFiS0dEHesDcZEAAAAHdElNRQflCAwIGTE0NixyAAAIFUlEQVR42u2ca5eqOgyGwUHZM4AUBRHw///OAyqQpGlpPQqzZuX9srfa69M26XWCQCQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUQi0d9XuPuKntofdrEt5D+o0Duj7z6jW68o+jr82MP+o0oWU+djJA5fvhlo/J3eiLL9zlSBIwp49Mko+ckzkpE5n160VDe1VBMtRnH/vnD48q1Id9GNVZbzvfBlqHHOZxQVzlDThSxOvwPq7nwzi63ui1BNSG1Y9ZAL1kavDOJXrgI1TG925frgfA3qlz2fiKWlh6usmRR6BMSvunwearJQ00GZegfUxca73b6doGZWV1UtQK1PH4fqUNNBX15Qd/volvWOfQe73sEln0jnxYTS2hh2EiY84jc6ss9BDbObm/a4tjaoydROx0uWj449d8sn00wAE8jmqk5M+JHf9Xg8Nn1f7v+5fg6qcmXaVwRRtUEdx9/pTrhomoGrI1OGKhfI4qo4nzvxm8zL9+d6qnM/HZS7Qn0mOruT+HTau+dDqXJhzK6q4ILP/B7mJY5uH4Ma+zB99jwHqM8vG/CV8smH+CGHIEAVFxzwa4f/teTLN0KdbZ+jajeo18eXwPB5jQhqMtkgylQnNifAT01t/BmojSfT29kN6thZpr2DxI8p7uQ8VJOr4ocE4Jck+32SfAwqa3169S6yNPw0GwAb1DHhPaXsLjAmeKgmV5UuQG2L3pGdi/ZTULn8W/U0VrE6Mj/Ppsw6T72guhhbz6IzsJl8CN5VhXzgmd9zbnD+EFRmoFRosy9mzEPnBHUs6LMNvLwUzcgElXdVhjGx2oaKNp8rtQ2NWjMDk1W1r6jGXyMusJOyuX0NIRRTJ5PxXgtqTTO+ME0falRHU2aHGo/xGkMyy5qHtyEA56pMY2ItqHT/9MIOJw396JcXNlSm2ilrZW2aymMKwLiqdFuodHe8NJydULs6jv+lXarJuCn80V3TTMMUQHdVsSnoSlDptkPtGX8JajLOAB5U54/Omsy3KYDuqowT75Wgtjgtr0MmF6izWX1SvXpTHYe3MYCieRrXGCtBZXN9J1TgnRT+6KpxVmUMQF2V2XKvA5UkdfVOwGHnf67ja1THRM0hiKuKjAHXgUpMauedgMtxykz18ArVbBEqdlWxOeA6UIk39nVTjmdUM9X8FaohBxVmjF0VdFPEZawDlaxxFu98vAYVUL1vDntSLTioHfR4CmYG3VTNpbQuVGRSVWRV4wMVUE1Db6odCxV2SOiqIMeSRFoHKp58ICadvaZHL6iAajbYmNBnZsVDRaYTuCo44qtNoLKgPgEVbsoM7spnFcBDDWAK4BwMs/7bUOGQH465E/cVa8VDhdPR2VXBYl+Dvw21L3k4d63zMFydT3EaHiq6LaHGjOBO5umPQ732Yz4BgYeDd+XorgzDH1nP544t3k6Lt4GK/cUHoR7vYx4M+eGjo7s6GaBSgIMg6GOwDVTM5Ax/ei/U9jHmgR0cZgGJ01kAP0/tv4E9/WEjkJtSvwIqmvy/F+qQ2nBnEM5Qv5LFXOxQoVV+LGbhsrtMNoJKnAVcpr4f6n2VCjvnua9PsWxYAxNUdGY69Evkpio90jpQyS4Z3FB5s/d/BEhjnHDfWRdNQGmEiqaqESVTbwWVnI/bb9GjmaXvPPXZITPSOYfOyl16BBon9gxUFDPGJbwykVbapC65DHjhLTVfqFN9h7kV9NH9NCC0Lq9Gm8RARUVq8My12Q4qWddEzkF9oc6G5t45QWNmuyCxLQRG78lARTOoTOu4W0GlZ8/mrkr2fjtPqLAX5UkQw4hRGBTGKWs7psDlj3yCgm7qwkVa69yfjP/M+LyPXNeNPaHiTlXjztpjNnZWZYOKio/u2rArhrWg0n2N1LBRTa6Vj/3HHSoudRTjzpp9myyr4TJFxxefRtsGqnaiw1OlV/VH7+Hx5AcHzQ5k8X/e4c771MVwmaLjmkpv9G2g6m2tvwvRmU5nBB5Qaf3TkOz/pQWzH1iclA1qYLDF/JRhNajMVc6cGFb9deXUfXwep7VMPthBRUVIlgJ9j7uwB38jVH6NMi4YtoLK7mvmP5MRSJgHqzM8H6jM2fEhCTo05qOiQEn2zatSG1T+QHo6CdgKasKvvocX+Ic84q7QgFtsXs8omebLDgkZ8+munj3WHd21s0DlL71OFmwrqPo9ySUZX6ek2h86+IcsScsk1mMNqQ8b78S3z7YILVC5Sz7zsfCrUPWK+P5dBc8Lji2Iurghii698Md9PdaCpLM/VOV0V7Z7LPQM6XJvUOeHHq9CZeTbV9vFFIHQtWA/qKYD/36lWhM3nuV5+xjEwzOvwgyV6xKmO+2rQvU5MMZXrT2hGst+3iVKmx2lX4fvn8PgJysLVN16AdO+IVQPqpXtFfUyVMumdF7U5tQsUPWpqvodUJ2P4eldcG+otn2+80GZilFYoNJJRWl8fLUyVMdj+IbG8oeKd1Op9oeG7co2qHT5Aht+Y6gLW8WDLvoC9gWoC+2X5R1DPbZADUjBzW8v14cakMUNVXliorwENYjtxqaJT4SrzVHR8xh0d3F7qEFiwdqyO62vQe3rYI54VfeiqGp2QEf9tBmmi6eqlqfXm0Ad6sJavOkB8Lug9rVoSz4nUJi666pj1YUMH5QuKjNq/F8B9cEVGanSSPR/Qe1VN3g2VB4tOdmgwqnqxRJpO6iPPIpuUF3E/z8tm8Li1DXH4Y/vdOrDWYlEIpFIJBKJRCKRSCQSiUQikUgkEolEIpFoPf0HZxm7rEn3sf0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDgtMTJUMDg6MjU6NDkrMDA6MDDnhxtWAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA4LTEyVDA4OjI1OjQ5KzAwOjAwltqj6gAAAABJRU5ErkJggg==' alt="glomil-site-logo" />
                </NavLink>

                <ResponsiveHeader />

                <a className='scroll-to-top-btn' onClick={scrollToTop}><IoArrowUp className='arrow-up' /></a>
            </div>
        </>
    )
}

export default Header;