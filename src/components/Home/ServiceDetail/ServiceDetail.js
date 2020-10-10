import React from 'react';

const ServiceDetail = ({service}) => {
    return (        
            <div className="col-md-4 text-center">
                <img style={{height: '50px'}} src={service.img} alt=""/>
                <h6 className="m-4">{service.name}</h6>
                <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, minima?</p>
            </div>       
    );
};

export default ServiceDetail;