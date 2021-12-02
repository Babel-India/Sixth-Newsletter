import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Styles/BSTC.css";
const BSTC = () => {
  return (
    <div id="BSTC" className='bstc'> 
            <h1 className='bstc-head'>Babel Software Testing Certification Champions</h1>
            <h3 className='bstc-intro'>There are always new, grander challenges to confront, and a true winner will embrace each one.</h3>
            <Container>
               <h1 className='bstc-name'>August</h1>

               <table className="bstc-table">
                   <tr>
                       <th>Name</th>
                       <th>Marks</th>
                       <th>Name</th>
                       <th>Marks</th>
                   </tr>
                   <tr>
                       <th>Vipul Arora</th>
                       <th>40</th>
                       <th>Utkarsh Kashyup</th>
                       <th>40</th>
                   </tr>
                   <tr>
                       <th>Sangam Krishna</th>
                       <th>38</th>
                       <th>Parag Deepak Sinnarkar</th>
                       <th>37</th>
                   </tr>
                   <tr>
                       <th>Ankit Niraj Kumar</th>
                       <th>37</th>
                       <th>Bassam Ahmad Khan</th>
                       <th>36</th>
                   </tr>
                   <tr>
                       <th>Aman Kumar</th>
                       <th>35</th>
                       <th>Partheesh Kher</th>
                       <th>34</th>
                   </tr>
                   <tr>
                       <th>Ranjeeb Mohanty</th>
                       <th>34</th>
                       <th>Shilpi Verma</th>
                       <th>33</th>
                   </tr>
</table>
            </Container>
        </div>
  );
};

export default BSTC;
