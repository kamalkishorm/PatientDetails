pragma solidity ^0.4.8;
contract PatientInfo{
    address owner;

    struct PatientInfoData{
        address _patientAddress;
        string _name;
        string _location;
        uint _dob;
    }

    mapping(address=>PatientInfoData) PatientData;
    
    function PatientInfo(){
      owner=msg.sender;
    }

    function killPatientInfoContract(){
    if(msg.sender==owner){
      suicide(owner);
    }
  }
  
  function showData(address _address) constant returns(string,string,uint){
      if(PatientData[_address]._dob>1){
      if(msg.sender==owner||msg.sender==_address){
          return (PatientData[_address]._name,PatientData[_address]._location,PatientData[_address]._dob);
      }}
      else{
       throw;
      }
  }
  
  function addPatient(address _address,string name,string location,uint dob) returns(string){
  if(msg.sender==owner){
        if(PatientData[_address]._patientAddress==_address){
            return "already exist" ;
        }else{
            if(msg.sender==owner){
              PatientInfoData memory newPatient;
              newPatient._patientAddress=_address;
              newPatient._name=name;
              newPatient._location=location;
              newPatient._dob=dob;
              PatientData[_address]=newPatient;
              return "address to blockchain.";
            }
            else{
                return "not authorize.";
            }
        }
      }else{
      throw;
      }
  }
}