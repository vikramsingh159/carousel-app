import React from 'react';
import { one, two, zero } from '../../constant/images';
import './Carousel.css';

function Carousel() {
  return (
    <div className="carousel-wrapper ">


      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="true"
      >
         <div class="carousel-indicators">
          <ul class="nav nav-pills" id="pills-tab" role="tablist">
            <li class="nav-item ms-2" role="presentation">
              <button
                class="nav-link active"
                data-bs-toggle="pill"
                aria-label="Slide 1"
                data-bs-target="#carouselExampleIndicators"
                role="tab"
                aria-controls="Slide 1"
                aria-selected="true"
                data-bs-slide-to="0"
              >
                Home
              </button>
            </li>
            <li class="nav-item ms-2" role="presentation">
              <button
                class="nav-link"
                aria-label="Slide 2"
                data-bs-toggle="pill"
                data-bs-target="#carouselExampleIndicators"
                role="tab"
                aria-controls="Slide 2"
                aria-selected="false"
                data-bs-slide-to="1"
              >
                Profile
              </button>
            </li>
            <li class="nav-item ms-2" role="presentation">
              <button
                class="nav-link"
                aria-label="Slide 3"
                data-bs-toggle="pill"
                data-bs-target="#carouselExampleIndicators"
                role="tab"
                aria-controls="Slide 3"
                aria-selected="false"
                data-bs-slide-to="2"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
        
        
        <div className="container-fluid ">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={zero} className="d-block w-100" alt="" />
          </div>
          <div class="carousel-item">
            <img src={one} className="d-block w-100" alt="" />
          </div>
          <div class="carousel-item">
            <img src={two} className="d-block w-100" alt="" />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
