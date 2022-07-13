import jsPDF from "jspdf";

const ticketPdfGenerator = (bookingConfirmation,selectedShow,paymentMode,data) => {
        //const string = renderToString(<ticket bookingConfirmation={bookingConfirmation} selectedShow={selectedShow} paymentMode={paymentMode} data={data} />);
        var name=data.name;
        var email=data.email;
        var noOfSeats=bookingConfirmation.noOfSeats;
        var movie=selectedShow.movie.name;
        var amountPaid=bookingConfirmation.amountPaid;
        var showDate=bookingConfirmation.showDate;
        var startTime=bookingConfirmation.startTime;
        
        const pdf = new jsPDF("p", "mm", "a4");
        pdf.setProperties({
            title: 'SkyFox Cinema',
            subject: 'Ticket details',
        });
        pdf.setFontSize(24);
        pdf.setFont(undefined,'bold');
        pdf.text(70,20,'SkyFox Cinema');
        pdf.setFontSize(20);
        pdf.text(80,30,'Ticket Details');
        pdf.setFont(undefined,'normal');
        pdf.setFontSize(18);
        pdf.text(20,50,'Name : '+name);
        pdf.text(20,60,'Email : '+email);
        pdf.text(20,70,'Number of seats : '+noOfSeats);
        pdf.text(20,80,'Movie name : '+movie);
        pdf.text(20,90,'Price : '+amountPaid);
        pdf.text(20,100,'Payment Mode : '+paymentMode);
        pdf.text(20,110,'Date and time of Show : '+showDate+'  '+startTime);

        pdf.save("MovieTicket.pdf");
}
export default ticketPdfGenerator;