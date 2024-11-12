import React from 'react';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

const DocSchedule = () => {
    return (
        <div className="bg-gray-100 p-10">
            <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg">
                <h1 className="text-center text-teal-700 text-2xl font-bold mb-6">MEDICAL APPOINTMENT CALENDAR</h1>

                <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="col-span-2">
                        <div className="bg-teal-700 text-white text-center py-2 font-bold">JANUARY, 2023</div>
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border p-2">Sun</th>
                                    <th className="border p-2">Mon</th>
                                    <th className="border p-2">Tue</th>
                                    <th className="border p-2">Wed</th>
                                    <th className="border p-2">Thu</th>
                                    <th className="border p-2">Fri</th>
                                    <th className="border p-2">Sat</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border p-2 text-center">1</td>
                                    <td className="border p-2 text-center">2</td>
                                    <td className="border p-2 text-center">3</td>
                                    <td className="border p-2 text-center">4</td>
                                    <td className="border p-2 text-center">5</td>
                                    <td className="border p-2 text-center">6</td>
                                    <td className="border p-2 text-center">7</td>
                                </tr>
                                <tr>
                                    <td className="border p-2 text-center">8</td>
                                    <td className="border p-2 text-center">9</td>
                                    <td className="border p-2 text-center">10</td>
                                    <td className="border p-2 text-center">11</td>
                                    <td className="border p-2 text-center">12</td>
                                    <td className="border p-2 text-center">13</td>
                                    <td className="border p-2 text-center">14</td>
                                </tr>
                                <tr>
                                    <td className="border p-2 text-center">15</td>
                                    <td className="border p-2 text-center">16</td>
                                    <td className="border p-2 text-center">17</td>
                                    <td className="border p-2 text-center">18</td>
                                    <td className="border p-2 text-center">19</td>
                                    <td className="border p-2 text-center">20</td>
                                    <td className="border p-2 text-center">21</td>
                                </tr>
                                <tr>
                                    <td className="border p-2 text-center">22</td>
                                    <td className="border p-2 text-center">23</td>
                                    <td className="border p-2 text-center">24</td>
                                    <td className="border p-2 text-center">25</td>
                                    <td className="border p-2 text-center">26</td>
                                    <td className="border p-2 text-center">27</td>
                                    <td className="border p-2 text-center">28</td>
                                </tr>
                                <tr>
                                    <td className="border p-2 text-center">29</td>
                                    <td className="border p-2 text-center">30</td>
                                    <td className="border p-2 text-center">31</td>
                                    <td className="border p-2 text-center"></td>
                                    <td className="border p-2 text-center"></td>
                                    <td className="border p-2 text-center"></td>
                                    <td className="border p-2 text-center"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h2 className="text-teal-700 font-bold mb-2">DOCTOR DETAILS</h2>
                        <p><strong>Name:</strong> Dr. John Williams</p>
                        <p><strong>Specialization:</strong> Cardiac Surgeon</p>
                        <p><strong>In Time:</strong> 08:30 AM</p>
                        <p><strong>Out Time:</strong> 06:30 PM</p>
                        <p><strong>Experience:</strong> 10 Years</p>
                    </div>
                </div>

                <h2 className="text-teal-700 font-bold mb-2">JANUARY</h2>
                <table className="w-full border-collapse mb-6">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border p-2">Sun</th>
                            <th className="border p-2">Mon</th>
                            <th className="border p-2">Tue</th>
                            <th className="border p-2">Wed</th>
                            <th className="border p-2">Thu</th>
                            <th className="border p-2">Fri</th>
                            <th className="border p-2">Sat</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border p-2 text-center">Surgery (08-01-2023)</td>
                            <td className="border p-2 text-center"></td>
                            <td className="border p-2 text-center"></td>
                            <td className="border p-2 text-center"></td>
                            <td className="border p-2 text-center">Diagnosis (05-01-2023)</td>
                            <td className="border p-2 text-center"></td>
                            <td className="border p-2 text-center">Investigation (07-01-2023)</td>
                        </tr>
                        <tr>
                            <td className="border p-2 text-center"></td>
                            <td className="border p-2 text-center">Surgery (17-01-2023)</td>
                            <td className="border p-2 text-center"></td>
                            <td className="border p-2 text-center"></td>
                            <td className="border p-2 text-center">Diagnosis (13-01-2023)</td>
                            <td className="border p-2 text-center"></td>
                            <td className="border p-2 text-center">Investigation (19-01-2023)</td>
                        </tr>
                        <tr>
                            <td className="border p-2 text-center">Investigation (23-01-2023)</td>
                            <td className="border p-2 text-center"></td>
                            <td className="border p-2 text-center"></td>
                            <td className="border p-2 text-center"></td>
                            <td className="border p-2 text-center"></td>
                            <td className="border p-2 text-center">Diagnosis (27-01-2023)</td>
                            <td className="border p-2 text-center">Surgery (28-01-2023)</td>
                        </tr>
                        <tr>
                            <td className="border p-2 text-center">Investigation (29-01-2023)</td>
                            <td className="border p-2 text-center"></td>
                            <td className="border p-2 text-center"></td>
                            <td className="border p-2 text-center"></td>
                            <td className="border p-2 text-center"></td>
                            <td className="border p-2 text-center"></td>
                            <td className="border p-2 text-center">Surgery (31-01-2023)</td>
                        </tr>
                    </tbody>
                </table>

                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-teal-700 text-white">
                            <th className="border p-2">DATE</th>
                            <th className="border p-2">PATIENT NAME</th>
                            <th className="border p-2">REASON FOR VISIT</th>
                            <th className="border p-2">STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td className="border p-2 text-center">02-01-2023</td>
                            <td className="border p-2 text-center">Michael</td>
                            <td className="border p-2 text-center">Mild Heart Stroke</td>
                            <td className="border p-2 text-center">Surgery</td>
                        </tr>
                        <tr>
                            <td className="border p-2 text-center">05-01-2023</td>
                            <td className="border p-2 text-center">Emily</td>
                            <td className="border p-2 text-center">Low Blood Pressure</td>
                            <td className="border p-2 text-center">Diagnosis</td>
                        </tr>
                        <tr>
                            <td className="border p-2 text-center">07-01-2023</td>
                            <td className="border p-2 text-center">Henry</td>
                            <td className="border p-2 text-center">Chest pain</td>
                            <td className="border p-2 text-center">Investigation</td>
                        </tr>
                        <tr>
                            <td className="border p-2 text-center">08-01-2023</td>
                            <td className="border p-2 text-center">Robin</td>
                            <td className="border p-2 text-center">Clogged Artery</td>
                            <td className="border p-2 text-center">Stent</td>
                        </tr>
                        <tr>
                            <td className="border p-2 text-center">13-01-2023</td>
                            <td className="border p-2 text-center">Clayton</td>
                            <td className="border p-2 text-center">High Blood Pressure</td>
                            <td className="border p-2 text-center">Diagnosis</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DocSchedule;
